from rest_framework import serializers
from .models import Survey


class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ("name", "age")

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.title)
        instance.age = validated_data.get("age", instance.artist)
        instance.save()
        return instance