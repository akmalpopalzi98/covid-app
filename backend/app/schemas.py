from datetime import datetime
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    name: str
    password: str
    
class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    email:EmailStr
    id : int
    created_at: datetime
    name: str


    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str
    name: str