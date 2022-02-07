from django.db import models
from django.contrib.auth.models import (
    AbstractUser,
    BaseUserManager as DjangoBaseUserManager,
)
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _


class BaseUserManager(DjangoBaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(
        self, email, password, first_name, last_name, phone_no, **extra_fields
    ):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


class Users(AbstractUser):

    username = None
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
        verbose_name="Phone Number",
    )
    is_email_verified = models.BooleanField(
        default=False, verbose_name="Email Verified"
    )
    is_phone_verified = models.BooleanField(
        default=False, verbose_name="Phone Verified"
    )
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

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "first_name",
        "last_name",
        "phone_no",
    ]

    objects = BaseUserManager()
