from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import status
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .decorators import validate_request_data
from .models import Survey
from .serializers import SurveySerializer


class ListCreateSurveyView(generics.ListCreateAPIView):
    """
    GET survey/
    POST survey/
    """
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    @validate_request_data
    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        print('request = ',request)
        a_survey = Survey.objects.create(
            name=request.data["name"],
            age=request.data["age"]
        )
        print("a_survey = ",a_survey)
        return Response(
            data=SurveySerializer(a_survey).data,
            status=status.HTTP_201_CREATED
        )
