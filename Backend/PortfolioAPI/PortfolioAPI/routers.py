from rest_framework import routers
from user_management.views import UserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
