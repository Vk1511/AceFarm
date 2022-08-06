from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import Product

router = DefaultRouter()
router.register('', Product, basename='Products')
urlpatterns = router.urls