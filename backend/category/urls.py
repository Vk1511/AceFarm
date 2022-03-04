from django.urls import path, include
from rest_framework import routers
from .views import CategoryView, Pybot

# router = routers.DefaultRouter()

# router.register("", CategoryView, basename='category')
# router.register("/sms", Pybot, basename='category')
# urlpatterns = router.urls
router = routers.DefaultRouter()

urlpatterns = [
    path("", CategoryView.as_view(), name="CategoryView"),
    path("sms/", Pybot.as_view(), name="pybot"),
]