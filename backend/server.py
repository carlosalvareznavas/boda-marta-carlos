from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path

# Import routes
from routes.rsvp import router as rsvp_router
from services.google_sheets import google_sheets_service

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Wedding RSVP API - Marta & Carlos")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add your routes to the router
@api_router.get("/")
async def root():
    return {"message": "Wedding RSVP API - Marta & Carlos"}

@api_router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "mongodb": "connected",
        "google_sheets": "configured" if google_sheets_service.is_configured() else "not configured"
    }

# Include RSVP routes
api_router.include_router(rsvp_router, tags=["RSVP"])

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    """Initialize services on startup"""
    logger.info("Starting Wedding RSVP API")
    
    # Initialize Google Sheets if configured
    if google_sheets_service.is_configured():
        google_sheets_service.initialize_sheet()
        logger.info("Google Sheets initialized")
    else:
        logger.warning("Google Sheets not configured - RSVPs will only be saved to MongoDB")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
