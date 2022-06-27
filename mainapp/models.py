from distutils.command.upload import upload
from django.db import models

class FileModel(models.Model):
    file = models.FileField()
    name = models.CharField(max_length=255)
    length = models.IntegerField(default=0)
    sha256hash = models.CharField(max_length=32)
    link = models.CharField(max_length=10)
    time = models.DateTimeField(auto_now_add=True)
    download_count = models.IntegerField(default=0)