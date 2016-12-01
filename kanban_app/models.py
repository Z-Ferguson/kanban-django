from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Tasks(models.Model):
    title = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    priority = models.CharField(max_length=255)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
