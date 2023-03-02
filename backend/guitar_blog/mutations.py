import graphene
from .models import Musician
from graphene_django import DjangoObjectType
from graphene_file_upload.scalars import Upload


class MusicianType(DjangoObjectType):
    class Meta:
        model = Musician


class CreateMusicianMutation(graphene.Mutation):
    class Arguments:
        cover = Upload()
        your_name = graphene.String(required=True)
        stage_name = graphene.String(required=True)
        bands_played = graphene.List(graphene.String)

    musician = graphene.Field(MusicianType)
    success = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, your_name, stage_name, cover, bands_played):
        musician = Musician.objects.create(your_name=your_name, stage_name=stage_name, cover=cover, bands_played=bands_played)
        musician.save()
        return CreateMusicianMutation(musician=musician, success=True)

    
