import graphene
from .models import CustomUser
from graphene_django import DjangoObjectType
from graphene_file_upload.scalars import Upload
from guitar_blog.models import Artist


class ArtistInput(graphene.InputObjectType):
    artist_name = graphene.String()
    cover = Upload()


class ArtistType(DjangoObjectType):
    class Meta:
        model = Artist
        fields = ('artist_name', 'cover')


class ArtistObjectType(graphene.ObjectType):
    artist_name = graphene.String()
    cover = graphene.String()


class UserType(DjangoObjectType):
    artist = graphene.List(ArtistType)
    artist_object = graphene.Field(ArtistObjectType)
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'artist_object')
        
    def resolve_artist_object(self, info):
        return ArtistObjectType(artist_name=self.artist["artist_name"], cover=self.artist["cover"])


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
        artist = ArtistInput(required=True)

    def mutate(self, info, username, email, password, artist):
        user = CustomUser.objects.create(
            username=username,
            email=email,
        )
        user.artist = {
            "artist_name": artist.artist_name,
            "cover": artist.cover
        } 
        print(user.artist)
        user.set_password(password)
        user.save()

        return CreateUser(user=user)
