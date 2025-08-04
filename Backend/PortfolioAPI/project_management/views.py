from rest_framework import generics
from .serializers import ProjectListSerializer
from .models import Project

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectListSerializer

