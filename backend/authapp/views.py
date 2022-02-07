from rest_framework import permissions, generics
from django.contrib.auth import get_user_model
from .serializers import (
    RegistartionsViewSerializer,
    MyTokenObtainPairSerializer,
    LongerLifetimeTokenObtainPairWithSerializer,
)
from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model()


class RegistartionsView(generics.CreateAPIView):
    serializer_class = RegistartionsViewSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()


class UserLoginView(TokenObtainPairView):

    permission_classes = (permissions.AllowAny,)

    def get_serializer_class(self):
        if not "remember_me" in self.request.data:
            return MyTokenObtainPairSerializer
        else:
            return LongerLifetimeTokenObtainPairWithSerializer
