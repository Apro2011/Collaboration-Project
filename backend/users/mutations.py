import graphene
from .models import CustomUser
from graphene_django import DjangoObjectType


class UserType(DjangoObjectType):
    class Meta:
        model = CustomUser


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, email, password):
        user = CustomUser(
            username=username,
            email=email,
        )
        user.set_password(password)
        user.save()

        return CreateUser(user=user)
