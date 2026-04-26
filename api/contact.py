import json
import os
from datetime import datetime
from pymongo import MongoClient
from pymongo.errors import PyMongoError

MONGODB_URI = os.environ.get("MONGODB_URI")
MONGODB_DB = os.environ.get("MONGODB_DB", "portfolio_db")
MONGODB_COLLECTION = os.environ.get("MONGODB_COLLECTION", "contacts")

client = None

def get_db():
    global client
    if client is None:
        if not MONGODB_URI:
            raise RuntimeError("MongoDB URI is not configured")
        client = MongoClient(MONGODB_URI, serverSelectionTimeoutMS=5000)
    return client[MONGODB_DB]


def save_contact(data):
    try:
        db = get_db()
        db[MONGODB_COLLECTION].insert_one(data)
        return True, None
    except PyMongoError as e:
        return False, str(e)


def handler(request):
    if request.method == "POST":
        data = request.json or {}
        name = data.get("name", "Guest")
        message = data.get("message", "")
        contact_entry = {
            "name": name,
            "message": message,
            "created_at": datetime.utcnow().isoformat() + "Z"
        }

        saved, error = save_contact(contact_entry)
        if not saved:
            return {
                "statusCode": 500,
                "headers": {"Content-Type": "application/json"},
                "body": json.dumps({
                    "status": "error",
                    "error": "Failed to save contact message",
                    "details": error
                })
            }

        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({
                "status": "success",
                "name": name,
                "message": message,
                "reply": "Your message was saved to MongoDB."
            })
        }

    return {
        "statusCode": 405,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"error": "Method not allowed"})
    }
