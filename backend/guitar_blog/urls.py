from django.urls import path


from .views import *


urlpatterns = [
    path('', MusicianListView.as_view(), name="Musician"),
    path('guitar_blog/<int:pk>/', MusicianDetailView.as_view(), name="blog_detail"),
    path('signup/', SignUpView.as_view(), name="signup"),
    path('login/', LogInView.as_view(), name="login"),
    path('logout/', LogOutView.as_view(), name="logout"),
    path('guitar_blog/create_musician/', MusicianCreationView.as_view(), name="create_musician"),
    path('likes/', post_likes, name="post_likes"),
]
