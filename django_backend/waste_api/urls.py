from django.urls import path
from .views import predict, home, history, signup,logout_view , history_api

urlpatterns = [
    path("", home),
    path("predict/", predict),
    path("history/", history_api),
    path("signup/", signup),
    path("logout/",logout_view)
]