from django.db import models
from django.contrib.auth.models import User


class Card(models.Model):
  face = models.CharField(max_length=100, unique=True, default='')
  back = models.CharField(max_length=100, unique=True, default='')
  trick = models.CharField(max_length=500, blank=True, default='')
  owner = models.ForeignKey(
      User, related_name="cards", on_delete=models.CASCADE, null=True
  )
  created_at = models.DateTimeField(auto_now_add=True)
