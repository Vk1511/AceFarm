from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import RegistartionsView

router = routers.DefaultRouter()

urlpatterns = [
    path('register/', RegistartionsView.as_view(),name="vishw"),
]