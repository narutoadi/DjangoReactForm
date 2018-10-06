from django.urls import path
from .views import ListCreateSurveyView


urlpatterns = [
    path('survey/', ListCreateSurveyView.as_view(), name="survey-all")
]