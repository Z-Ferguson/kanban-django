from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Task(models.Model):
    priority_choices = [("h", 'High'), ("m", 'Moderate'), ("l", 'Low')]
    status_choices = [("b", 'Backlog'), ("r", 'Ready'), ("p", 'In Progress'), ("c", 'Complete')]

    title = models.CharField(max_length=150)
    status = models.CharField(max_length=20)
    priority = models.CharField(max_length=20)
    description = models.TextField(max_length=1250, null=True)
    assignment = models.CharField(max_length=20)

    # class Meta:
    #     ordering = ('status', 'priority', 'created')
    #
    # def __str__(self):
    #     return self.title
