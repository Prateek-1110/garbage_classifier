# 🧠 Garbage AI — Smart Waste Classification System

An end-to-end **AI-powered web application** that classifies garbage images and provides **smart disposal guidance**.
Built using **Deep Learning + Django + React**, with **Google OAuth authentication**.

---

## 🚀 Live Demo

🔗 [*Garbage Classifier*](https://garbage-classifier-three.vercel.app/)

---

## 📌 Features

*  **Deep Learning Model (EfficientNet)**
*  Upload image → get **Top-3 predictions with confidence**
*  **Smart disposal suggestions** based on waste type
*  **Google OAuth Login**
*  **Prediction History Dashboard (per user)**
*  **Real-time AI inference**
*  Modern UI with Tailwind CSS
*  Full-stack deployment ready

---

## 🏗️ Tech Stack

### 🔹 Backend

* Django
* Django REST Framework
* PyTorch
* EfficientNet

### 🔹 Frontend

* React.js
* Tailwind CSS
* Axios

### 🔹 Authentication

* Google OAuth (django-allauth)

### 🔹 Deployment

* Backend → Render
* Frontend → Vercel

---

## 📂 Project Structure

```
garbage_ai/
│
├── model/
│   └── garbage.pth
│
├── inference/
│   └── predictor.py
│
├── django_backend/
│   ├── backend/
│   ├── waste_api/
│   └── templates/
│
├── frontend/
│   └── React App
│
└── README.md
```

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/garbage-ai.git
cd garbage-ai
```

---

## 🔹 Backend Setup

### 2️⃣ Create Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4️⃣ Run Migrations

```bash
cd django_backend
python manage.py migrate
```

---

### 5️⃣ Create Superuser

```bash
python manage.py createsuperuser
```

---

### 6️⃣ Run Server

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## 🔹 Frontend Setup

### 7️⃣ Install Dependencies

```bash
cd frontend
npm install
```

---

### 8️⃣ Run React App

```bash
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---


## 🧠 Model Details

* Architecture: **EfficientNet**

* Input size: `224x224`

* Classes:

  * Plastic
  * Glass
  * Metal
  * Paper
  * Cardboard
  * Trash

* Output:

  * Top-3 predictions
  * Confidence scores




---

## 🎯 Future Improvements

*  Analytics dashboard
*  Mobile optimization
*  Model accuracy improvements
*  Real-time camera detection
*  Multi-language support

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

MIT License

---

## 👨‍💻 Author

**Prateek Agrahari**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/prateek1110/)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!
