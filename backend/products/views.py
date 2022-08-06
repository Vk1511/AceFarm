from .models import Products
from rest_framework import viewsets , pagination
from .serializer import ProductSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated

class Product(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    pagination_class = None
    
    def get_queryset(self):
        return Products.objects.all()

    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = [IsAuthenticated, ]
        else:
            self.permission_classes = [IsAdminUser,]
        return super(Product, self).get_permissions()