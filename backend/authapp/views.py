from django.shortcuts import render
from rest_framework import permissions, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RegistartionsViewSerializer


class RegistartionsView(generics.CreateAPIView):

    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        serializer = RegistartionsViewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
