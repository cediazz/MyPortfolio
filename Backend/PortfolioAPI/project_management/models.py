from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=256,unique=True,verbose_name='nombre del proyecto')
    website_url = models.URLField(max_length=200, blank=True, null=True,verbose_name='url del sitio')
    repository_url = models.URLField(max_length=200, blank=True, null=True,verbose_name='url del repositorio')
    description = models.TextField(verbose_name='descripción del proyecto')
    image = models.ImageField(blank=True,verbose_name='imagen del proyecto')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Proyecto'
        
