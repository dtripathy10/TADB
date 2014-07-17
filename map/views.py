from django.shortcuts import render

# Create your views here.

from django.utils import simplejson
from django.http import HttpResponse

from map.models import Accident

def  accident_data(request):

	## get the data from model
	queryset = Accident.objects.all()

	dictlist = queryset.values()

	result = []

	for dic_value in dictlist:
		result.append(dic_value)
		
	return HttpResponse(
        simplejson.dumps(result),
        content_type = 'application/javascript; charset=utf8'
    )