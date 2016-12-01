from django.shortcuts import render
from rest_framework import viewsets
from .models import Tasks
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Tasks.objects.all().order_by('title')
    serializer_class = TaskSerializer


def view_main(request):
    return render(request, 'main.html')
