from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
# Create your models here.

class CustomUser(AbstractUser):
    email=models.EmailField(unique=True)
    profile_picture=models.URLField(blank=True,null=True)
    
    def __str__(self):
        return self.username
    
class ProductPrompt(models.Model):
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,null=True, blank=True)
    title=models.CharField(max_length=255)
    brand_name=models.CharField(max_length=255,null=True)
    platform=models.CharField(max_length=255,null=True)
    description=models.TextField()
    #image=models.ImageField(upload_to='product_image/',null=True,blank=True)
    generated_image_url = models.URLField(null=True, blank=True) 
    created_at=models.DateTimeField(auto_now_add=True)
