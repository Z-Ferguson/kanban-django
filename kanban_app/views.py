from django.shortcuts import render, HttpResponseRedirect
from rest_framework import viewsets
from .models import Tasks
from django.contrib.auth.models import User
from django.contrib.auth import login
from .serializers import TaskSerializer
from kanban_app.forms import UserForm


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Tasks.objects.all().order_by('title')
    serializer_class = TaskSerializer


def view_main(request):
    return render(request, 'main.html')


def create_user(request):
    if request.method == "GET":
        form = UserForm(request.GET)
        if form.is_valid():
            user = User.objects.create_user(**form.cleaned_data)
            user.save()
            login(request, user)
            return HttpResponseRedirect('/kanban_app/main')
    else:
        form = UserForm()
        return render(request, 'create_user.html', {'form': form})
