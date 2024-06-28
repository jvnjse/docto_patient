from django.db import models

# Create your models here.
# first_name
#  last_name
#  gender
#  date_of_birth
#  address
#  phone_number
#  email


class Patient(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    email = models.CharField(max_length=255)
    date_of_birth = models.DateField()
