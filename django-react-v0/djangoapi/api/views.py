from django.shortcuts import render
#from django.contrib.auth.models import User
from productlisting.models import CustomUser
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.generics import RetrieveAPIView
# Create your views here.
class CreateUser(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
   
createUser = CreateUser.as_view() 

class GetUser(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    
getUser = GetUser.as_view()

