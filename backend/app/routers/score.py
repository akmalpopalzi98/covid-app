from typing import List
from fastapi import Depends
from .. import models
from ..database import get_db
from ..schemas import SubmitScore, UserScoreOut
from sqlalchemy.orm import Session
from fastapi import status, HTTPException, Depends, APIRouter
from ..utils import hash
router = APIRouter(
     tags=["Scores"]
)


@router.post("/scores", status_code=status.HTTP_201_CREATED, response_model=UserScoreOut)
def add_score(payload: SubmitScore, db:Session = Depends(get_db)):   
     new_score = models.score(**payload.model_dump())
     db.add(new_score)
     db.commit()
     db.refresh(new_score)
     return new_score