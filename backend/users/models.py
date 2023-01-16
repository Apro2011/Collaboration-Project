from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(verbose_name="email", max_length=254, blank=False)
    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"

# Create your models here.
