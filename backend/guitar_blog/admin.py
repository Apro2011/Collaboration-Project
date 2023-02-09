from django.contrib import admin
from .models import Musician, Music, MusicMusician

admin.site.register(Musician)
admin.site.register(Music)
admin.site.register(MusicMusician)

# Register your models here.
