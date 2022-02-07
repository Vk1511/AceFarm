from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import RegistartionsView, UserLoginView

router = routers.DefaultRouter()

urlpatterns = [
    path("register/", RegistartionsView.as_view(), name="Register"),
    path("login/", UserLoginView.as_view(), name="Login"),
]
