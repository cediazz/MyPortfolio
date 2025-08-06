from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserSerializer
# incluir id del usuario al listar
#valorar solo dejar endpoint para listar y actualizar password
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()[:1]
    serializer_class = UserSerializer

