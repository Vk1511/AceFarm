from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.
class Category(models.Model):

    category_title = models.CharField(
        max_length=128, unique=True, null=False, blank=False
    )
    total_products = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    catrgory_description = models.TextField()
