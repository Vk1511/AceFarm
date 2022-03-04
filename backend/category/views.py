from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser
from .serializer import CategoryViewSerializer
from .models import Category
from rest_framework.views import APIView
from twilio.twiml.messaging_response import MessagingResponse

# Create your views here.
class CategoryView(viewsets.ModelViewSet):

    serializer_class = CategoryViewSerializer

    def get_queryset(self):
        return Category.objects.all()

    def get_permissions(self):
        if self.action == "list" or "get":
            self.permisssion_classes = [
                AllowAny,
            ]
        else:
            self.permisssion_classes = [
                IsAdminUser,
            ]
        return super(CategoryView, self).get_permissions()

class Pybot(APIView):
    def post(self, request, *args, **kwargs):
        resp = MessagingResponse()
        resp.message("You said: {}")

        return str(resp)