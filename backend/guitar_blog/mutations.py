import graphene
from .models import Musician
from graphene_django import DjangoObjectType


class MusicianType(DjangoObjectType):
    class Meta:
        model = Musician


class CreateMusicianMutation(graphene.Mutation):
    class Arguments:
        your_name = graphene.String(required=True) 
        stage_name = graphene.String(required=True)

    musician = graphene.Field(MusicianType)
    success = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, your_name, stage_name):
        musician = Musician.objects.create(your_name=your_name, stage_name=stage_name)
        musician.save()
        return CreateMusicianMutation(musician=musician, success=True)

    
