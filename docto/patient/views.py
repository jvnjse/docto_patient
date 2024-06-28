from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Patient
from .serializers import PatientSerialiser

# Create your views here.


def ok(request):
    return HttpResponse("OK")


@api_view(["GET"])
def get_all_patients(request):
    patients = Patient.objects.all()
    serializer = PatientSerialiser(patients, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def post_patient(request):
    # patients = Patient.objects.all()
    serializer = PatientSerialiser(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(["POST"])
def edit_patient(request, patient_id):
    if patient_id:
        patient = Patient.objects.get(id=patient_id)
        serializer = PatientSerialiser(data=request.data)
        if serializer.is_valid():
            patient.first_name = request.data.get("first_name")
            patient.last_name = request.data.get("last_name")
            patient.gender = request.data.get("gender")
            patient.address = request.data.get("address")
            patient.phone_number = request.data.get("phone_number")
            patient.email = request.data.get("email")
            patient.date_of_birth = request.data.get("date_of_birth")
            patient.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


@api_view(["GET"])
def get_single_patient(request, patient_id):
    if patient_id:
        patient = Patient.objects.get(id=patient_id)
        serializer = PatientSerialiser(patient)
        return Response(serializer.data)
