from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView )

from map.models import Map
from api.serializers import TaskSerializer

# Create your views here.

class TaskMixin(object):
    """
    Mixin to inherit from.
    Here we're setting the query set and the serializer
    """
    queryset = Map.objects.all()
    serializer_class = TaskSerializer

class TaskList(TaskMixin, ListCreateAPIView):
    """
    Return a list of all the tasks, or
    create new ones
    """
    pass

class TaskDetail(TaskMixin, RetrieveUpdateDestroyAPIView):
    """
    Return a specific task, update it, or delete it.
    """
    pass