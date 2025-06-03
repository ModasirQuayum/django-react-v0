from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from api  import views as api_views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/',api_views.createUser,name="register"),
    path('api/authenticated/user/',api_views.getUser,name="user"),
    path('api/token/',TokenObtainPairView.as_view(),name="get_token"),
    path('api/token/refresh/',TokenRefreshView.as_view(),name="refresh"),
    path('api-auth/',include('rest_framework.urls')),
    path('product/',include('productlisting.urls')),
]


