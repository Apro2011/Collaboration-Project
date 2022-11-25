from django.db import models


# Create your models here.
class Musician(models.Model):
    name_of_blog_maker = models.CharField(max_length=200, null=True, blank=True)
    name_of_musician = models.CharField(max_length=200)
    name_of_band = models.CharField(max_length=200)
    published_date = models.DateTimeField("Published At", blank=True, null=True)
    appreciation = models.TextField(null=True, blank=True)
    cover = models.ImageField(upload_to="media/", default=None)
    music_1 = models.FileField(upload_to="media/", default=None)
    music_1_name = models.CharField(max_length=200, null=True, blank=True)
    music_1_votes = models.IntegerField(default=0)
    music_1_users = models.JSONField(default=dict)
    music_2 = models.FileField(upload_to="media/", default=None)
    music_2_name = models.CharField(max_length=200, null=True, blank=True)
    music_2_votes = models.IntegerField(default=0)
    music_2_users = models.JSONField(default=dict)
    music_3 = models.FileField(upload_to="media/", default=None)
    music_3_name = models.CharField(max_length=200, null=True, blank=True)
    music_3_votes = models.IntegerField(default=0)
    music_3_users = models.JSONField(default=dict)
    
    def __str__(self):
        return self.name_of_musician
