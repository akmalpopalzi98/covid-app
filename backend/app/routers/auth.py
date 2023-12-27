from typing import List
from fastapi import Depends
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from .. import models
from ..database import get_db
from ..schemas import UserLogin, Token
from sqlalchemy.orm import Session
from fastapi import status, HTTPException, Response, Depends, APIRouter
from ..utils import compare_hash
from ..oauth2 import create_token

router = APIRouter(
     tags=["Authentication"]
)


@router.post("/login", response_model=Token)
def login(payload: OAuth2PasswordRequestForm = Depends(), db:Session = Depends(get_db)):
    user = db.query(models.user).filter(payload.username == models.user.email).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_403_NOT_FOUND, detail="Invalid credentials")
    if not compare_hash(payload.password,user.password):
        raise HTTPException(status_code=status.HTTP_403_NOT_FOUND, detail="Invalid credentials")
    access_token = create_token(data={"user_id":user.id})
    return {"access_token": access_token, "token_type":"bearer","id":user.id}