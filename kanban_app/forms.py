from django import forms
from django.contrib.auth.models import User
# from .models import Tasks


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'username', 'password')

# class TasksForm(forms.ModelForm):
#     class Meta:
#         model = Tasks
#         exclude = ['owner']
