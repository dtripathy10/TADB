from __future__ import unicode_literals
from django.db import models


# Create your models here.


class Map( models.Model ):
	
	# Whether this task is completed
	completed = models.BooleanField( default = False )
	# Task title
	title = models.CharField( max_length = 100 )


class Accident(models.Model):
    police_station = models.CharField(max_length=60)
    date_of_accident = models.CharField(max_length=60)
    time_of_accident = models.CharField(max_length=60)
    source_vehicle_type = models.CharField(max_length=60)
    source_plate_no = models.CharField(max_length=60)
    destination_vehicle_type = models.CharField(max_length=60)
    destination_plate_no = models.CharField(max_length=60)
    fatal_number = models.CharField(max_length=60)
    gender_age = models.CharField(max_length=60)
    location = models.CharField(max_length=11)
    latitude = models.CharField(max_length=60)
    longitude = models.CharField(max_length=60)
    act = models.TextField()
    id = models.IntegerField(primary_key=True)
    class Meta:
        managed = False
        db_table = 'accident'
