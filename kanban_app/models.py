from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Tasks(models.Model):
    priority_choices = [("h", 'High'), ("m", 'Moderate'), ("l", 'Low')]
    status_choices = [("b", 'Backlog'), ("r", 'Ready'), ("p", 'In Progress'), ("c", 'Complete')]

    title = models.CharField(max_length=150)
    status = models.CharField(max_length=1, choices=status_choices, default="h")
    priority = models.CharField(max_length=1, choices=priority_choices, default="r")
    description = models.TextField(max_length=1250, null=True)
    created = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name='tasks', null=True, blank=True)

    class Meta:
        ordering = ('status', 'priority', 'created')

    def __str__(self):
        return self.title
