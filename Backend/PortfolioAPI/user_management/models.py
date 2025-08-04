from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    profession = models.CharField(max_length=256,verbose_name='profesión')
    skills = models.CharField(max_length=256,verbose_name='habilidades')
    about_me = models.TextField(verbose_name='acerca de mi')
    location = models.CharField(max_length=256,verbose_name='dirección',null=True)
    facebook_url = models.URLField(max_length=200, blank=True, null=True,verbose_name='url de facebook')
    linkedin_url = models.URLField(max_length=200, blank=True, null=True,verbose_name='url de linkedin')
    image = models.ImageField(blank=True,verbose_name='imagen del usuario')
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile', verbose_name='usuario')

    def __str__(self):
        return self.user.username
    
    class Meta:
        verbose_name = 'Perfil del usuario'
        db_table = 'auth_user_profile'
