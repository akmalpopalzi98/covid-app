from typing import List
from fastapi import Depends
from .. import models
from ..database import get_db
from ..schemas import UserCreate, UserOut
from sqlalchemy.orm import Session
from fastapi import status, HTTPException, Depends, APIRouter
from ..utils import hash
router = APIRouter(
     tags=["User"]
)


@router.post("/users", status_code=status.HTTP_201_CREATED, response_model=UserOut)
def create_user(payload: UserCreate, db:Session = Depends(get_db)):   
     payload.password = hash(payload.password)
     new_post = models.user(**payload.model_dump())
     db.add(new_post)
     db.commit()
     db.refresh(new_post)
     return new_post