from django.conf.urls import include, url
from kanban_app.views import *
from django.contrib import admin


urlpatterns = [
    url(r'^$', views.index, name='home'),
    url('^', include('django.contrib.auth.urls')),
]
