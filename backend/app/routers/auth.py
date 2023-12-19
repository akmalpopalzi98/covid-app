from fastapi import APIRouter


router = APIRouter(
     tags=["Authentication"]
)


@router.get("/")
def test():
    return "hello"