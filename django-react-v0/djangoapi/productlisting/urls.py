from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token # For token generation
from . import views

urlpatterns = [
    # path('api/token/', obtain_auth_token),
    path('generate-product/',views.generate_product,name='generate-product'),
    path('listed-product/',views.listed_product,name='listed-product'),
    path('product-detail/<int:pk>/',views.product_detail,name='product-detail'),
    
]