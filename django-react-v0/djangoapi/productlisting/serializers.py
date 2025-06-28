from rest_framework import serializers
from . models import ProductPrompt

class ProductPromptSerializers(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    class Meta:
        model=ProductPrompt
        fields=['id','user','title','brand_name','platform','description']
        read_only_fields = ['id', 'user'] 

    def get_user(self,obj):
        return obj.user.username