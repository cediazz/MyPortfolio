from .models import Curriculum
from rest_framework import serializers


class CurriculumListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curriculum
        fields = '__all__'