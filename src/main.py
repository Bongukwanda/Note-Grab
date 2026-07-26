from enum import Enum
from fastapi import FastAPI

class Users(str, Enum):
  user1 = "Bongukwanda"
  user2 = "Zondi"
  user3 = "Nondaba"

app = FastAPI()

@app.get("/")
async def landingPage():
  return {"page 1: /users"}

@app.get("/users")
async def usersPage():
  return "Enter User Name."

@app.get("/users/{user}")
async def getUsers(user: Users):
  if user == Users.user1:
    return f"{user} : main user"
  elif user == Users.user2:
    return f"{user} : secondary user"
  else:
    return f"{user} : stand-by user"