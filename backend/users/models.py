from djongo import models
from django.contrib.auth.models import AbstractUser
from guitar_blog.models import Artist


class CustomUser(AbstractUser):
    email = models.EmailField(verbose_name="email", max_length=254, blank=False)
    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
    artist = models.EmbeddedField(model_container=Artist)
