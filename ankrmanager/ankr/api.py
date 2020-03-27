from ankr.models import Ankr
from rest_framework import viewsets, permissions
from .serializers import AnkrSeiralizer


# Ankr Viewset
class AnkrViewSet(viewsets.ModelViewSet):
  queryset = Ankr.objects.all()
  permission_classes = [
      permissions.AllowAny
  ]
  serializer_class = AnkrSeiralizer
