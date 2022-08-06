from django.db import models

# Create your models here.
class Products(models.Model):

    product_id = models.CharField(max_length=15, blank=False, unique=True)
    product_name = models.CharField(max_length=15, blank=False)
    product_description = models.TextField(blank=False)
    market_price = models.DecimalField(max_digits=20, decimal_places=10)
    discount = models.IntegerField()
    our_price = models.DecimalField(max_digits=20, decimal_places=10)
    rating = models.IntegerField()
    is_selling = models.BooleanField(default=False)
    