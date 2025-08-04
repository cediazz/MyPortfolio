from django.urls import path
from .views import ProjectListView

urlpatterns = [
    path('list-projects', ProjectListView.as_view(), name='list-projects'),
]