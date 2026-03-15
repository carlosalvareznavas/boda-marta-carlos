from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

class Guest(BaseModel):
    name: str
    age_category: str  # 'adulto', 'adolescente', 'nino'
    main_dish: Optional[str] = ''
    allergies: Optional[str] = ''

class RSVPCreate(BaseModel):
    attending: str  # 'si' or 'no'
    number_of_guests: int = 0
    guests: List[Guest] = []
    phone: str
    email: Optional[EmailStr] = None
    comments: Optional[str] = ''
    song_request: Optional[str] = ''  # Campo de canción añadido

class RSVP(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    attending: str
    number_of_guests: int
    guests: List[Guest]
    phone: str
    email: Optional[str]
    comments: Optional[str]
    song_request: Optional[str] = ''  # Campo de canción añadido
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        json_schema_extra = {
            "example": {
                "attending": "si",
                "number_of_guests": 2,
                "guests": [
                    {
                        "name": "Juan Pérez",
                        "age_category": "adulto",
                        "allergies": "Frutos secos"
                    },
                    {
                        "name": "María Pérez",
                        "age_category": "nino",
                        "allergies": ""
                    }
                ],
                "phone": "634123456",
                "email": "juan@example.com",
                "comments": "Llegamos un poco tarde",
                "song_request": "Despacito"
            }
        }
