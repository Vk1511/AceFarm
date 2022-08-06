from django.urls import path

from .views import OrderPlace

urlpatterns = [
    path("", OrderPlace.as_view(), name="Order"),
]
