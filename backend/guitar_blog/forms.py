from django import forms


from django.contrib.auth.models import User


from django.contrib.auth.forms import UserCreationForm


from .models import Musician


from django.contrib.auth.forms import AuthenticationForm


# Sign Up Form
class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=200, help_text="Enter a valid email address", required=False)
    password2 = forms.CharField(label="Re-Enter Password", widget=forms.PasswordInput()) 

    def __init__(self, *args, **kwargs):
            super(SignUpForm, self).__init__(*args, **kwargs)
            self.fields['username'].widget.attrs.update({'class' : 'myfieldclass'})
            self.fields['password1'].widget.attrs.update({'class' : 'myfieldclass'})
            self.fields['password2'].widget.attrs.update({'class' : 'myfieldclass'})
            self.fields['email'].widget.attrs.update({'class' : 'myfieldclass'})

            for fieldname in ['username', 'password2', 'email']:
                self.fields[fieldname].help_text = None

            self.fields['password1'].help_text = "Password should contain minimum of 8 characters"

    class Meta:
        model = User
        
        fields = [
            "username",
            "email",
            "password1",
            "password2",
        ]

    def clean(self):
        cleaned_data = super().clean()
        if User.objects.filter(username=cleaned_data["username"]).exists():
            raise forms.ValidationError("The username is taken, please try another one.")
        if User.objects.filter(email=cleaned_data["email"]).exists():
            raise forms.ValidationError("This email address is already taken.")

    def save(self, commit=True):
        user = super(SignUpForm, self).save(commit=False)
        user.email = self.cleaned_data["email"]
        if commit:
            user.save()
        return user


class CustomLoginForm(AuthenticationForm):

  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self.fields['username'].widget.attrs.update(
      {'class': 'my-username-class'}
    )
    self.fields['password'].widget.attrs.update(
      {'class': 'my-password-class'}
    )


class CreateMusician(forms.ModelForm):

    class Meta:
        model = Musician
        exclude = ("published_date", "music_1_votes", "music_2_votes", "music_3_votes",
                   "music_1_users", "music_2_users", "music_3_users",)
        labels = {
            "appreciation": "Why do you like these music pieces?",
            "name_of_musician": "Your Name or Stage Name",
            "name_of_blog_maker": "You want to post as (Any Nickname or Your Name)",
            "cover": "Your Image or Album Cover Image",
            "name_of_band": "Type your band name or Solo Performer if you are"
        }
        help_texts = {
            "music_1": "Upload only weba or mp3 format files",
            "music_2": "Upload only weba or mp3 format files",
            "music_3": "Upload only weba or mp3 format files",
        }
        widgets = {
            "name_of_blog_maker": forms.TextInput(attrs={"class": "your_name"}),
            "name_of_musician" : forms.TextInput(attrs={"class": "your_name"}),
            "name_of_band": forms.TextInput(attrs={"class": "your_name"}),
            "appreciation": forms.Textarea(attrs={"class": "your_name"}),
            "cover": forms.FileInput(attrs={"class": "img_button"}),
            "music_1": forms.FileInput(attrs={"class": "img_button"}),
            "music_2": forms.FileInput(attrs={"class": "img_button"}),
            "music_3": forms.FileInput(attrs={"class": "img_button"}),
            "music_1_name": forms.TextInput(attrs={"class": "your_name"}),
            "music_2_name": forms.TextInput(attrs={"class": "your_name"}),
            "music_3_name": forms.TextInput(attrs={"class": "your_name"}),
        }
