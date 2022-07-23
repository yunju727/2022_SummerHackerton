from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Member(models.Model):
    title = models.CharField(max_length=20)
    content = models.CharField(max_length=255)
    name = models.CharField(max_length=20)
    age = models.CharField(max_length=3)
    createdDate = models.DateTimeField(auto_now_add=True)
    updatedDate = models.DateTimeField(auto_now=True)


class Board(models.Model):
    title = models.CharField(max_length=20)
    content = models.CharField(max_length=255)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    createDate = models.DateTimeField(auto_now_add=True)
    updatedDate = models.DateTimeField(auto_now=True)
