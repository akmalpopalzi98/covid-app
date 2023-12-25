from .database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship

class user(Base):
    __tablename__ = "covid-users"
    email =  Column(String, nullable = False, unique = True)
    password =  Column(String, nullable = False)
    id = Column(Integer,primary_key = True, nullable = False)
    created_at = Column(TIMESTAMP(timezone=True),nullable = False, server_default = text("NOW()"))
    name = Column(String, nullable=False)
    scores = relationship("score", back_populates="users")


class score(Base):
    __tablename__ = "user-scores"
    id = Column(Integer,primary_key=True,nullable=False)
    user_id = Column(Integer,ForeignKey("covid-users.id",ondelete = "CASCADE"))
    score = Column(Integer,nullable=False)
    users = relationship("user",back_populates="scores")
    
    

