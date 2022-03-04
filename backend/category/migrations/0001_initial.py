# Generated by Django 4.0.1 on 2022-02-08 19:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_title', models.CharField(max_length=128, unique=True)),
                ('total_products', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('catrgory_description', models.TextField()),
            ],
        ),
    ]
