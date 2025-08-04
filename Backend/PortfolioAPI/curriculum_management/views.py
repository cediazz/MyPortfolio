from .models import Curriculum
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from .models import Curriculum


def download_cv(request):
    cv = get_object_or_404(Curriculum)
    print(cv)
    file = open(cv.file.path, 'rb')
    response = FileResponse(file)
    response['Content-Disposition'] = f'attachment; filename="{cv.file.name}"'
    return response

