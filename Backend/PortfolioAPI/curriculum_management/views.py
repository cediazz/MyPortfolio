from .models import Curriculum
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from .models import Curriculum
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view

@swagger_auto_schema(
        method='GET',
        operation_description="Descargar CV",
        tags=["Curriculum"],
        responses={
            200: 'CV en PDF',
            400: 'Error'
        },
        
)
@api_view(['GET'])
def download_cv(request):
    cv = get_object_or_404(Curriculum)
    file = open(cv.file.path, 'rb')
    response = FileResponse(file)
    response['Content-Disposition'] = f'attachment; filename="{cv.file.name}"'
    return response

