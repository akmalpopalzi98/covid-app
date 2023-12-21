from fastapi import FastAPI
from .routers import auth, user
from . import models
from .database import engine
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(engine)


app = FastAPI()

app.include_router(auth.router)
app.include_router(user.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the origin(s) of your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

