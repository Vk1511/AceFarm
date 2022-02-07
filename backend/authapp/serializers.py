from pyexpat import model
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import (
    validate_password as django_validate_password,
)
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from datetime import timedelta
import os

User = get_user_model()


class RegistartionsViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "phone_no", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    def validate(self, attrs):
        password = attrs.get("password")
        user = User(**attrs)
        django_validate_password(password, user=user)
        return super().validate(attrs)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # # Add custom claims
        # token['user'] = user.email
        return token


class LongerLifetimeTokenObtainPairWithSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        access_token_long_lifetime = refresh.access_token
        access_token_long_lifetime.set_exp(
            lifetime=timedelta(
                minutes=int(os.getenv("JWT_ACCESS_TOKEN_LONGER_TIMESPAN", 1440))
            )
        )

        refresh_token_long_lifetime = refresh
        refresh_token_long_lifetime.set_exp(
            lifetime=timedelta(
                minutes=int(os.getenv("JWT_REFRESH_TOKEN_LONGER_TIMESPAN", 10080))
            )
        )

        data["refresh"] = str(refresh_token_long_lifetime)
        data["access"] = str(access_token_long_lifetime)

        return data
