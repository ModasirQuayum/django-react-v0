#from django.contrib.auth.models import User
from rest_framework import serializers
from productlisting.models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    class Meta:
        model = CustomUser
        fields = ['id','username','email','password','password2']
        extra_kwargs = {"password":{"write_only":True}}

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError({"status": "error", "Message": "Password and Confirm Password Doesn't Match"}) 
        return attrs   
    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(**validated_data)

        return user