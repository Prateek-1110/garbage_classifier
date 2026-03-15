from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import AllowAny
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
import sys
import os
from .models import Prediction
from rest_framework.decorators import api_view
from rest_framework.response import Response
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))
sys.path.append(BASE_DIR)

from inference.predictor import predict_image

DISPOSAL_GUIDE = {
    "plastic": "Plastic waste should be cleaned and placed in a recycling bin. Many plastics can be reused or processed into new materials.",
    "paper": "Paper waste can usually be recycled. Keep it dry and dispose of it in a paper recycling bin.",
    "glass": "Glass items should be placed in glass recycling containers. Avoid mixing broken glass with regular trash.",
    "metal": "Metal cans and containers should be rinsed and placed in metal recycling bins.",
    "cardboard": "Flatten cardboard boxes before placing them in cardboard recycling bins.",
    "biological": "Biological waste such as food scraps should be composted or placed in organic waste bins.",
    "battery": "Batteries are hazardous waste. They should be disposed of at special collection centers.",
    "clothes": "Clothes can often be reused or donated. If not reusable, place them in textile recycling bins.",
    "shoes": "Shoes should be donated if usable or placed in textile recycling bins.",
    "trash": "This item is not recyclable and should be placed in general landfill waste bins."
}

@api_view(["GET"])
def history_api(request):

    predictions = Prediction.objects.order_by("-created_at")[:20]

    data = []

    for p in predictions:
        data.append({
            "id": p.id,
            "image": p.image.url,
            "class": p.predicted_class,
            "confidence": p.confidence,
            "time": p.created_at
        })

    return Response(data)
    
@api_view(["POST"])
def predict(request):

    # request._dont_enforce_csrf_checks = True

    if "image" not in request.FILES:
        return Response({"error": "No image uploaded"}, status=400)

    image = request.FILES["image"]

    results = predict_image(image)

    best = results[0]

    prediction = Prediction.objects.create(
        image=image,
        predicted_class=best["class"],
        confidence=best["confidence"]
    )
    guide = DISPOSAL_GUIDE.get(best["class"],"Dispose responsibly")
    return Response({
        "predictions": results,
        "id": prediction.id,
        "guide":guide
    })
from django.shortcuts import render

def home(request):
    return render(request, "upload.html")

from django.shortcuts import render
from .models import Prediction

@login_required
def history(request):

    predictions = Prediction.objects.order_by("-created_at")

    return render(request, "history.html", {
        "predictions": predictions
    })
def signup(request):

    if request.method == "POST":

        form = UserCreationForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect("/accounts/login/")

    else:
        form = UserCreationForm()

    return render(request, "signup.html", {"form": form})
def logout_view(request):
    logout(request)
    return redirect("/api")
    
from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "Garbage Classifier API running"
    })