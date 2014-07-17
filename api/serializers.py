from rest_framework import serializers
from map.models import Map

class TaskSerializer( serializers.ModelSerializer ):
	"""
	Serializer to parse Task data
	"""

	class Meta:
		model = Map
		fields = ( 'title', 'completed', 'id' )