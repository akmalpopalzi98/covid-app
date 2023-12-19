from fastapi import APIRouter


router = APIRouter(
     tags=["User"]
)


@router.get("/")
def test():
    return "hello"