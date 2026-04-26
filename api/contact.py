import json

def handler(request):
    if request.method == "POST":
        data = request.json or {}
        name = data.get("name", "Guest")
        message = data.get("message", "")
        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({
                "status": "success",
                "name": name,
                "message": message,
                "reply": "Your message was received by the Python backend."
            })
        }

    return {
        "statusCode": 405,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"error": "Method not allowed"})
    }
