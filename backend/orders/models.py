from django.db import models

from products.models import Products
from authapp.models import Users
# Create your models here.
class Order(models.Model):
    
    class OrderStatus(models.TextChoices):
        ORDER_PLACED = "ORDER_PLACED", "Order_Placed"
        DISPATCHED = "DISPATCHED", "Dispatched"
        DELIVERED = "DELIVERED", "Delivered"

    order_id = models.CharField(max_length=15, blank=False, unique=True)
    market_price = models.DecimalField(max_digits=20, decimal_places=10)
    discount = models.IntegerField()
    our_price = models.DecimalField(max_digits=20, decimal_places=10)
    status = models.CharField(
            max_length=15,
            choices=OrderStatus.choices,
            blank=False,
            default=OrderStatus.ORDER_PLACED,
        )   
    order_on = models.DateTimeField(auto_now_add=True,)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)

class OrderProducts(models.Model):

    order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Products, on_delete=models.CASCADE)
    discount = models.IntegerField()
    market_price = models.DecimalField(max_digits=20, decimal_places=10)
    our_price = models.DecimalField(max_digits=20, decimal_places=10)
    qty = models.IntegerField()
    units = models.IntegerField()