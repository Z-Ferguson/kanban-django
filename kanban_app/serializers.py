from rest_framework import serializers
from .models import Task
# from django.contrib.auth.models import User


class TaskSerializer(serializers.ModelSerializer):

    # title = serializers.CharField(max_length=250)
    # priority = serializers.ChoiceField(choices=Tasks.priority_choices)
    # status = serializers.ChoiceField(choices=Tasks.status_choices)
    # description = serializers.CharField(max_length=250)
    #
    # def create(self, validated_data):
    #     return Tasks(**validated_data)

    class Meta:
        model = Task
        fields = ('id', 'url', 'title', 'status', 'priority', 'description', 'created', 'owner')

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     full_name = serializers.CharField(source='get_full_name')
#
#     class Meta:
#         model = User
#         fields = ('url', 'id', User.USERNAME_FIELD, 'full_name', 'is_active')
