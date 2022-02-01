from pyexpat import model
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import (
    validate_password as django_validate_password,
)

User = get_user_model()


class RegistartionsViewSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "phone_no", "password"]
        # extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print("validated data",validated_data)
        user = User.objects.create_user(**validated_data)
        return user

    def validate(self, attrs):
        password = attrs.get("password")
        user = User(**attrs)
        django_validate_password(password, user=user)
        return super().validate(attrs)
