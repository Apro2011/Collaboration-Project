from django.test import TestCase, RequestFactory
from django.urls import resolve, reverse
from guitar_blog.views import (LogOutView, MusicianListView, MusicianDetailView, SignUpView, LogInView, LogOutView, MusicianCreationView)
from guitar_blog.models import Musician
from guitar_blog.forms import CreateMusician


class HomePageTest(TestCase):

    def setUp(self) -> None:
        Musician.objects.create(
            name_of_blog_maker="Jhonty Rhodes",
            name_of_musician="Alip Ba Ta",
            cover="alip.jpg",
            music_1="simpsons1.mp3",
            music_1_name="simpsons1",
            music_2="simpsons2.mp3",
            music_2_name="simpsons2",
            music_3="simpsons3.mp3",
            music_3_name="simpsons3",
        )

    def test_context_object_name(self):

        """Context Object Name should me 'latest musician'!"""

        request = RequestFactory().get("/")
        view = MusicianListView()
        view.setup(request)

        context = view.context_object_name
        self.assertIn("latest_musician", context)

    def test_template(self):

        """Status Code for homepage should be 200"""

        response = self.client.get("/")
        self.assertEquals(response.status_code, 200)


class MusicianContentViewTest(TestCase):

    def setUp(self) -> None:
        Musician.objects.create(
            name_of_blog_maker="Jhonty Rhodes",
            name_of_musician="Alip Ba Ta",
            cover="alip.jpg",
            music_1="simpsons1.mp3",
            music_1_name="simpsons1",
            music_2="simpsons2.mp3",
            music_2_name="simpsons2",
            music_3="simpsons3.mp3",
            music_3_name="simpsons3",
        )

    def test_blog_detail_url_is_resolved(self):

        """URL named 'blog_detail' should resolve to the detail view class"""

        url = reverse("blog_detail", args=[Musician.objects.get(name_of_musician="Alip Ba Ta").pk])
        self.assertEqual(resolve(url).func.view_class, MusicianDetailView)


class SignUpViewTest(TestCase):

    def test_sign_up_page_url(self) -> None:

        """Status code of signup page should be 200"""

        response = self.client.get("/signup/")
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, template_name="registration/signup.html")

    def test_signup_page_view_name(self) -> None:

        """Signup View should upload the tested view using the tested template"""

        response = self.client.get(reverse("signup"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, template_name="registration/signup.html")

    def test_signup_page_url_is_resolved(self) -> None:

        """URL named 'signup' should resolve to the signup view class"""

        url = reverse("signup")
        self.assertEqual(resolve(url).func.view_class, SignUpView)


class LoginViewTest(TestCase):

    def test_login_page_url(self) -> None:

        """Status code of login page should be 200"""

        response = self.client.get("/login/")
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, template_name="registration/login.html")

    def test_login_page_view_name(self) -> None:

        """Login View should upload the tested view using the tested template"""

        response = self.client.get(reverse("login"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, template_name="registration/login.html")

    def test_login_page_url_is_resolved(self) -> None:

        """URL named 'login' should resolve to the login view class"""

        url = reverse("login")
        self.assertEqual(resolve(url).func.view_class, LogInView)


class LogoutViewTest(TestCase):

    def test_logout_page_url(self) -> None:

        """Status code of logout page should be 302"""

        response = self.client.get("/logout/")
        self.assertEqual(response.status_code, 302)

    def test_logout_page_view_name(self) -> None:

        """Login View should upload the tested view using the tested template"""

        response = self.client.get(reverse("logout"))
        self.assertEqual(response.status_code, 302)

    def test_login_page_url_is_resolved(self) -> None:

        """URL named 'logout' should resolve to the logout view class"""

        url = reverse("logout")
        self.assertEqual(resolve(url).func.view_class, LogOutView)


class MusicianCreationViewTest(TestCase):

    def setUp(self) -> None:

        """Signing Up and Logging In beacuse the view contains LoginRequiredMixin"""

        self.username = "testuser"
        self.email = "testuser@example.com"
        self.password = "AlipBaTa@1999"

        self.client.post(reverse("signup"), data={
            'username': self.username,
            'email': self.email,
            'password1': self.password,
            'password2': self.password,
        })

        self.client.post(reverse("login"), data={
            "username": self.username,
            "password": self.password,
        })

    def test_creation_page_url(self) -> None:

        """Status Code of creation page should be 200"""

        response = self.client.get("/guitar_blog/create_musician/")
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, template_name="guitar_blog/creation.html")

    def test_creation_page_view_name(self) -> None:

        """Creation Page View upload the tested view using the tested template"""

        response = self.client.get(reverse("create_musician"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, template_name="guitar_blog/creation.html")

    def test_creation_page_url_is_resolved(self) -> None:

        """URL named 'guitar_blog/creation.html' should resolve to the musician creation view class"""

        url = reverse("create_musician")
        self.assertEqual(resolve(url).func.view_class, MusicianCreationView)

    def test_form_valid_function(self) -> None:

        """Form valid function should save the form"""

        form_data = self.client.post(reverse("create_musician"), data={
            "name_of_blog_maker": "tester",
            "name_of_musician": "John Petrucci"
        })

        form = CreateMusician(data=form_data)
        self.assertTrue(form.is_valid, True)
