from .models import Order, OrderProducts
from rest_framework import serializers


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"

class OrderProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderProducts
        fields = "__all__"