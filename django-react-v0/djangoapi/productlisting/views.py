import json
from rest_framework.decorators import api_view, parser_classes, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .serializers import ProductPromptSerializers
from .models import ProductPrompt
from rest_framework.permissions import IsAuthenticated
from .utils import generate_product_listing

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
@permission_classes([IsAuthenticated])
def generate_product(request):
    serializer = ProductPromptSerializers(data=request.data)

    if serializer.is_valid():
        validated_data = serializer.validated_data
        text_inputs = [
            validated_data.get('title', ''),
            validated_data.get('description', '')
        ]

        try:
            # Generate product using OpenAI
            data = generate_product_listing(text_inputs)

            # Save to DB
            product = ProductPrompt.objects.create(
                title=data['title'],
                description=data['description'],
                user=request.user
            )

            # Return serialized response
            product_serializer = ProductPromptSerializers(product)
            return Response(product_serializer.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def listed_product(request):
    
    product=ProductPrompt.objects.filter(user=request.user)
    serializer = ProductPromptSerializers(product,many=True)

    return Response(serializer.data)
