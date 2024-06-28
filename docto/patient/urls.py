from django.urls import path
from .views import *

# import * from .views

urlpatterns = [
    path("", ok, name="ok"),
    path("getpatients/", get_all_patients, name="get_all_patients"),
    path("postpatients/", post_patient, name="post_patient"),
    path("patient/<int:patient_id>/", get_single_patient, name="get_single_patient"),
    path("editpatient/<int:patient_id>/", edit_patient, name="edit_patient"),
]
