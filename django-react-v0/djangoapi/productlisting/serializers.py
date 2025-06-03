from rest_framework import serializers
from . models import ProductPrompt

class ProductPromptSerializers(serializers.ModelSerializer):
    class Meta:
        model=ProductPrompt
        fields=['title','description']
        extra_kwargs = {
            'user': {'read_only': True}
        }