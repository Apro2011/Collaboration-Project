from djongo import models


class Artist(models.Model):
    cover = models.ImageField(upload_to="media/", default=None)
    artist_name = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        abstract = True
    
    def __str__(self):
        return self.artist_name


# class Music(models.Model):
#     musician_id = models.ManyToManyField(Artist, through="MusicMusician")
#     about = models.TextField(null=True, blank=True)
#     music = models.FileField(upload_to="media/", default=None)
#     music_name = models.CharField(max_length=200, null=True, blank=True)

#     def __str__(self) -> str:
#         return self.music_name


# class Votes(models.Model):
#     music_id = models.ForeignKey(Music, on_delete=models.CASCADE)
#     music_votes = models.IntegerField(default=0)
#     music_voters = models.JSONField(default=dict)


# class MusicMusician(models.Model):
#     musician_id = models.ForeignKey(Artist, on_delete=models.CASCADE)
#     music_id = models.ForeignKey(Music, on_delete=models.CASCADE)


