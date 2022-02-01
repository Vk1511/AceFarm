from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _

class Users(AbstractUser):
    email = models.EmailField(
        _("Email Address"),
        unique=True,
        db_index=True,
        error_messages={"unique": "User is already exist with given email address"},
    )
    first_name = models.CharField(max_length=128, verbose_name="First Name")
    last_name = models.CharField(max_length=128, verbose_name="Last Name")
    phone_no = PhoneNumberField(
        unique=True,
        db_index=True,
        error_messages={"unique": "User is already exist with given phone number"},
        verbose_name="Phone Number"
    )
    is_email_verified = models.BooleanField(default=False,verbose_name="Email Verified")
    is_phone_verified = models.BooleanField(default=False, verbose_name="Phone Verified")
    # address_1 = models.CharField(max_length=255)
    # address_2 = models.CharField(max_length=255)
    # city = models.CharField(max_length=64)
    # state = models.CharField(max_length=64)
    # postal_code_regex = RegexValidator(
    #     regex=r"^[0-9]+$",
    #     message=(
    #         "Postal Code must be entered in the format: '1234567'. Up to 7 digits allowed."
    #     ),
    # )
    # postal_code = models.CharField(validators=[postal_code_regex], max_length=7)
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "first_name",
        "last_name",
        "phone_no",
    ]
