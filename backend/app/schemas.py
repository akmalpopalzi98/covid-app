from datetime import datetime
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    
class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    email:EmailStr
    id : int
    created_at: datetime


    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str