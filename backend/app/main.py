from fastapi import FastAPI
from .routers import auth, user
from . import models
from .database import engine


models.Base.metadata.create_all(engine)


app = FastAPI()

app.include_router(auth.router)
app.include_router(user.router)


