import torch
import torch.nn.functional as F
from torchvision import transforms
from torchvision.models import efficientnet_b0
from PIL import Image
import os


# -------- MODEL PATH --------

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "..",
    "model",
    "garbage.pth"
)


# -------- CLASS NAMES --------

CLASS_NAMES = [
    "battery",
    "biological",
    "cardboard",
    "clothes",
    "glass",
    "metal",
    "paper",
    "plastic",
    "shoes",
    "trash"
]


# -------- TRANSFORM --------

transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485,0.456,0.406],
        std=[0.229,0.224,0.225]
    )
])


# -------- LOAD MODEL --------

model = torch.load(MODEL_PATH, map_location="cpu", weights_only=False)
model.eval()


# -------- PREDICT FUNCTION --------

def predict_image(image):

    image = Image.open(image).convert("RGB")

    image = transform(image)

    image = image.unsqueeze(0)

    with torch.no_grad():

        outputs = model(image)

        probs = F.softmax(outputs, dim=1)

        top3_prob, top3_idx = torch.topk(probs, 3)

    results = []

    for i in range(3):

        label = CLASS_NAMES[top3_idx[0][i]]

        confidence = top3_prob[0][i].item()

        results.append({
            "class": label,
            "confidence": round(confidence * 100, 2)
        })

    return results