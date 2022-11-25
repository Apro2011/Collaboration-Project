from django.contrib.auth.models import User


from django.forms import ValidationError


from django.test import TestCase


from django.urls import reverse


from guitar_blog.forms import UserCreationForm


from django.utils.encoding import force_str


class SignUpFormTest(TestCase):

    def setUp(self) -> None:
        self.username = "testuser"
        self.email = "testuser@example.com"
        self.password = "AlipBaTa@1999"

    def test_signup_form(self):

        """Redirection should happen after signup and an object should be created"""

        response = self.client.post(reverse("signup"), data={
            'username': self.username,
            'email': self.email,
            'password1': self.password,
            'password2': self.password,
        })
        self.assertEqual(response.status_code, 302)
        users = User.objects.all()
        self.assertEqual(users.count(), 1)

    def test_user_already_exists(self):

        """User should not be allowed to enter """

        self.client.post(reverse("signup"), data={
            'username': self.username,
            'email': self.email,
            'password1': self.password,
            'password2': self.password,
        })

        data = {
            "username": self.username,
            "email": self.email,
            "password1": self.password,
            "password2": self.password,
        }
        form = UserCreationForm(data)
        self.assertEquals(
            form["username"].errors,
            [force_str(User._meta.get_field('username').error_messages['unique'])]
        )


class LogInFormTest(TestCase):

    def setUp(self) -> None:
        self.username = "testuser"
        self.email = "testuser@example.com"
        self.password = "AlipBaTa@1999"

    def test_login_form(self) -> None:

        """Signing Up with set up and then testing Login Form, it should login after submitting (status code 302)"""

        self.client.post(reverse("signup"), data={
            'username': self.username,
            'email': self.email,
            'password1': self.password,
            'password2': self.password,
        })

        response = self.client.post(reverse("login"), data={
            "username": self.username,
            "password": self.password,
        })
        self.assertEqual(response.status_code, 302)


class CreateMusicianFormTest(TestCase):

    def setUp(self) -> None:
        self.blog_maker = "testname"
        self.musician_name = "testmusician"
        self.image = "testsong.jpg"
    
    def test_create_musician_form(self) -> None:

        """Testing the Create Musician Form, Musician should be created after submitting(status_code 302)"""

        response = self.client.post(reverse("create_musician"), data={
            "name_of_blog_maker": self.blog_maker,
            "name_of_musician": self.musician_name,
            "cover": self.image,
        })
        self.assertEqual(response.status_code, 302)
