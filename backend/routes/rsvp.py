from fastapi import APIRouter, HTTPException, status
from models.rsvp import RSVP, RSVPCreate
from motor.motor_asyncio import AsyncIOMotorClient
from services.google_sheets import google_sheets_service
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

@router.post("/rsvp", response_model=RSVP, status_code=status.HTTP_201_CREATED)
async def create_rsvp(rsvp_input: RSVPCreate):
    """
    Create a new RSVP response
    - Saves to MongoDB
    - Saves to Google Sheets (if configured)
    """
    try:
        # Create RSVP object
        rsvp = RSVP(
            attending=rsvp_input.attending,
            number_of_guests=rsvp_input.number_of_guests,
            guests=[guest.dict() for guest in rsvp_input.guests],
            phone=rsvp_input.phone,
            email=rsvp_input.email,
            comments=rsvp_input.comments
        )
        
        # Save to MongoDB
        rsvp_dict = rsvp.dict()
        await db.rsvps.insert_one(rsvp_dict)
        logger.info(f"RSVP saved to MongoDB: {rsvp.phone}")
        
        # Save to Google Sheets
        if google_sheets_service.is_configured():
            google_sheets_service.add_rsvp(rsvp_dict)
        else:
            logger.warning("Google Sheets not configured - RSVP saved only to MongoDB")
        
        return rsvp
    
    except Exception as e:
        logger.error(f"Error creating RSVP: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al guardar la confirmación: {str(e)}"
        )

@router.get("/rsvp/stats")
async def get_rsvp_stats():
    """
    Get RSVP statistics
    """
    try:
        total_rsvps = await db.rsvps.count_documents({})
        attending = await db.rsvps.count_documents({"attending": "si"})
        not_attending = await db.rsvps.count_documents({"attending": "no"})
        
        # Count total guests
        attending_rsvps = await db.rsvps.find({"attending": "si"}).to_list(None)
        total_guests = sum(rsvp.get('number_of_guests', 0) for rsvp in attending_rsvps)
        
        # Count by age category
        adults = 0
        adolescentes = 0
        ninos = 0
        
        for rsvp in attending_rsvps:
            for guest in rsvp.get('guests', []):
                category = guest.get('age_category', '')
                if category == 'adulto':
                    adults += 1
                elif category == 'adolescente':
                    adolescentes += 1
                elif category == 'nino':
                    ninos += 1
        
        return {
            "total_responses": total_rsvps,
            "attending": attending,
            "not_attending": not_attending,
            "total_guests": total_guests,
            "adults": adults,
            "adolescentes": adolescentes,
            "children": ninos,
            "google_sheets_configured": google_sheets_service.is_configured()
        }
    
    except Exception as e:
        logger.error(f"Error getting stats: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al obtener estadísticas: {str(e)}"
        )

@router.get("/rsvp/list")
async def get_all_rsvps():
    """
    Get all RSVP responses (for admin use)
    """
    try:
        rsvps = await db.rsvps.find().sort("submitted_at", -1).to_list(1000)
        return rsvps
    except Exception as e:
        logger.error(f"Error getting RSVPs: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al obtener confirmaciones: {str(e)}"
        )
