from django.urls import path
from .views import predict, home, history, signup,logout_view , history_api , health_check

urlpatterns = [
    path("", home),
    path("predict/", predict),
    path("history/", history_api),
    path("signup/", signup),
    path("logout/",logout_view),
    path("health/", health_check),
]