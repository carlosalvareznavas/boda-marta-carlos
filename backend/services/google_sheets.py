from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import os
import json
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

class GoogleSheetsService:
    def __init__(self):
        self.spreadsheet_id = os.environ.get('GOOGLE_SHEETS_ID', '')
        self.service = None
        
        credentials = None
        
        # Try loading from JSON env var first (production)
        creds_json = os.environ.get('GOOGLE_CREDENTIALS_JSON', '')
        if creds_json:
            try:
                creds_info = json.loads(creds_json)
                credentials = service_account.Credentials.from_service_account_info(
                    creds_info,
                    scopes=['https://www.googleapis.com/auth/spreadsheets']
                )
                logger.info("Google credentials loaded from environment variable")
            except Exception as e:
                logger.error(f"Failed to load Google credentials from env: {e}")
        
        # Fallback to file (local development)
        if not credentials:
            credentials_path = os.environ.get('GOOGLE_CREDENTIALS_PATH', '/app/backend/google-credentials.json')
            if os.path.exists(credentials_path):
                try:
                    credentials = service_account.Credentials.from_service_account_file(
                        credentials_path,
                        scopes=['https://www.googleapis.com/auth/spreadsheets']
                    )
                    logger.info("Google credentials loaded from file")
                except Exception as e:
                    logger.error(f"Failed to load Google credentials from file: {e}")
        
        if credentials:
            try:
                self.service = build('sheets', 'v4', credentials=credentials)
                logger.info("Google Sheets service initialized successfully")
            except Exception as e:
                logger.error(f"Failed to build Google Sheets service: {e}")
        else:
            logger.warning("No Google credentials found")
    
    def is_configured(self):
        """Check if Google Sheets is properly configured"""
        return self.service is not None and self.spreadsheet_id
    
    def initialize_sheet(self):
        """Initialize the sheet with headers if empty"""
        if not self.is_configured():
            return False
        
        try:
            # Check if headers exist
            result = self.service.spreadsheets().values().get(
                spreadsheetId=self.spreadsheet_id,
                range='A1:K1'
            ).execute()
            
            values = result.get('values', [])
            
            if not values:
                # Add headers - one row per person structure
                headers = [[
                    'Fecha y Hora',
                    'ID Familia',
                    'Asiste',
                    'Nombre',
                    'Categoría',
                    'Alergias / Dieta',
                    'Teléfono',
                    'Email',
                    'Comentarios',
                    'Canción'
                ]]
                
                self.service.spreadsheets().values().update(
                    spreadsheetId=self.spreadsheet_id,
                    range='A1:J1',
                    valueInputOption='RAW',
                    body={'values': headers}
                ).execute()
                
                logger.info("Sheet initialized with headers")
            
            return True
        except HttpError as e:
            logger.error(f"Error initializing sheet: {e}")
            return False
    
    def add_rsvp(self, rsvp_data):
        """Add RSVP response to Google Sheets - one row per guest"""
        if not self.is_configured():
            logger.warning("Google Sheets not configured, skipping")
            return False
        
        try:
            timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
            family_id = rsvp_data.get('id', '-')
            attending = 'Sí' if rsvp_data['attending'] == 'si' else 'No'
            phone = rsvp_data.get('phone', '-')
            email = rsvp_data.get('email', '-') or '-'
            comments = rsvp_data.get('comments', '-') or '-'
            song_request = rsvp_data.get('song_request', '-') or '-'
            
            guests = rsvp_data.get('guests', [])
            rows = []
            
            if guests:
                for i, guest in enumerate(guests):
                    row = [
                        timestamp,
                        family_id,
                        attending,
                        guest.get('name', '-'),
                        guest.get('age_category', '-'),
                        guest.get('allergies', '-') or '-',
                        phone if i == 0 else '',
                        email if i == 0 else '',
                        comments if i == 0 else '',
                        song_request if i == 0 else ''
                    ]
                    rows.append(row)
            else:
                # No guests (attending = no)
                rows.append([
                    timestamp,
                    family_id,
                    attending,
                    '-',
                    '-',
                    '-',
                    phone,
                    email,
                    comments,
                    song_request
                ])
            
            # Append all rows
            self.service.spreadsheets().values().append(
                spreadsheetId=self.spreadsheet_id,
                range='A:J',
                valueInputOption='RAW',
                insertDataOption='INSERT_ROWS',
                body={'values': rows}
            ).execute()
            
            logger.info(f"RSVP added to Google Sheets: {len(rows)} rows for family {family_id}")
            return True
        except HttpError as e:
            logger.error(f"Error adding RSVP to Google Sheets: {e}")
            return False

# Create singleton instance
google_sheets_service = GoogleSheetsService()
