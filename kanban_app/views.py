from django.shortcuts import render, HttpResponseRedirect
from rest_framework import viewsets
from .models import Task
# from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from .serializers import TaskSerializer
# from kanban_app.forms import UserForm


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = Task.objects.all().order_by('title')
    serializer_class = TaskSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     """
#     A viewset that provides the standard actions
#     """
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


def view_main(request):
    return render(request, 'main.html')


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
        return HttpResponseRedirect('/kanban_app/main/')
    else:
        form = UserCreationForm()
        context = {'form': form}
    return render(request, 'registration/register.html', context)
