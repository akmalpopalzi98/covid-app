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

