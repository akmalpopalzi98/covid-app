from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated = "auto")


def hash(password:str):
    pwd = pwd_context.hash(password)
    return pwd


def compare_hash(raw_password,hashed_password):
    return pwd_context.verify(raw_password,hashed_password)

