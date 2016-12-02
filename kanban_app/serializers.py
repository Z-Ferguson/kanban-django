from rest_framework import serializers
from .models import Tasks
from django.contrib.auth.models import User


class TaskSerializer(serializers.Serializer):
    priority = serializers.ChoiceField(choices=Tasks.priority_choices)
    status = serializers.ChoiceField(choices=Tasks.status_choices)

    class Meta:
        model = Tasks
        fields = ('url', 'id', 'title', 'status', 'priority', 'description', 'owner')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    full_name = serializers.CharField(source='get_full_name', read_only=True)

    class Meta:
        model = User
        fields = ('url', 'id', User.USERNAME_FIELD, 'full_name', 'is_active')
