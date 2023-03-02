from django.db import models


class Musician(models.Model):
    cover = models.ImageField(upload_to="media/", default=None)
    your_name = models.CharField(max_length=200, null=True, blank=True)
    stage_name = models.CharField(max_length=200)
    bands_played = models.JSONField(default=list, null=True)
    published_date = models.DateTimeField("Published At", blank=True, null=True)
    
    def __str__(self):
        return self.your_name


class Music(models.Model):
    musician_id = models.ManyToManyField(Musician, through="MusicMusician")
    about = models.TextField(null=True, blank=True)
    music = models.FileField(upload_to="media/", default=None)
    music_name = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self) -> str:
        return self.music_name


class Votes(models.Model):
    music_id = models.ForeignKey(Music, on_delete=models.CASCADE)
    music_votes = models.IntegerField(default=0)
    music_voters = models.JSONField(default=dict)


class MusicMusician(models.Model):
    musician_id = models.ForeignKey(Musician, on_delete=models.CASCADE)
    music_id = models.ForeignKey(Music, on_delete=models.CASCADE)

