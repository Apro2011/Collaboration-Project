from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.generic import ListView, DetailView, CreateView
from .models import Musician
from django.urls import reverse_lazy
from .forms import SignUpForm, CreateMusician, CustomLoginForm
from django.contrib.auth.views import LoginView, LogoutView
from mysite.settings import LOGOUT_REDIRECT_URL, LOGIN_REDIRECT_URL
from django.utils import timezone
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import login
from django.shortcuts import redirect


# Create your views here.
class MusicianListView(ListView):
    model = Musician
    template_name = "guitar_blog/musician_blog.html"
    context_object_name = "latest_musician"
    
    def get_queryset(self):
        return Musician.objects.order_by("-published_date")


class MusicianDetailView(DetailView):
    model = Musician
    template_name = "guitar_blog/blog_detail.html"

@login_required
def post_likes(request):
    song = Musician.objects.get(pk=int(request.POST.get("primary_key")))
    user_id = int(request.POST.get("user_id"))
    user_username = request.POST.get("username")

    if "Like1" in request.POST.get("button_name") and user_username not in song.music_1_users.keys():
        song.music_1_votes += 1
        song.music_1_users[user_username] = user_id
        song.save()
        return JsonResponse({"final": song.music_1_votes, "req_name": "Unlike1", "inner_text": "Unlike"})

    elif "Unlike1" in request.POST.get("button_name") and user_username in song.music_1_users.keys():
        song.music_1_votes -= 1
        song.music_1_users.pop(user_username)
        song.save()
        return JsonResponse({"final": song.music_1_votes, "req_name": "Like1", "inner_text": "Like"})

    elif "Like2" in request.POST.get("button_name") and user_username not in song.music_2_users.keys():
        song.music_2_votes += 1
        song.music_2_users[user_username] = user_id
        song.save()
        return JsonResponse({"final": song.music_2_votes, "req_name": "Unlike2", "inner_text": "Unlike"})

    elif "Unlike2" in request.POST.get("button_name") and user_username in song.music_2_users.keys():
        song.music_2_votes -= 1
        song.music_2_users.pop(user_username)
        song.save()
        return JsonResponse({"final": song.music_2_votes, "req_name": "Like2", "inner_text": "Like"})

    elif "Like3" in request.POST.get("button_name") and user_username not in song.music_3_users.keys():
        song.music_3_votes += 1
        song.music_3_users[user_username] = user_id
        song.save()
        return JsonResponse({"final": song.music_3_votes, "req_name": "Unlike3", "inner_text": "Unlike"})

    elif "Unlike3" in request.POST.get("button_name") and user_username in song.music_3_users.keys():
        song.music_3_votes -= 1
        song.music_3_users.pop(user_username)
        song.save()
        return JsonResponse({"final": song.music_3_votes, "req_name": "Like3", "inner_text": "Like"})


class SignUpView(CreateView):
    form_class = SignUpForm
    success_url = reverse_lazy("Musician")
    template_name = "registration/signup.html"
    def form_valid(self,form):
        user = form.save()
        login(self.request, user, backend='django.contrib.auth.backends.ModelBackend')
        return redirect('Musician')


class LogInView(LoginView):
    template_name = "registration/login.html"
    authentication_form = CustomLoginForm
    next_page = LOGIN_REDIRECT_URL


class LogOutView(LogoutView):
    template_name = "guitar_blog/base.html"
    next_page = LOGOUT_REDIRECT_URL


class MusicianCreationView(LoginRequiredMixin, CreateView):
    form_class = CreateMusician
    template_name = "guitar_blog/creation.html"
    success_url = reverse_lazy("Musician")

    def form_valid(self, form):
        form.instance.published_date = timezone.now()
        return super().form_valid(form)
