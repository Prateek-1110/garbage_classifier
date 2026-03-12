from django.urls import path
from .views import predict, home, history, signup,logout_view

urlpatterns = [
    path("", home),
    path("predict/", predict),
    path("history/", history),
    path("signup/", signup),
    path("logout/",logout_view)
]