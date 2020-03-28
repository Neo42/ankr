from card.models import Card
from rest_framework import viewsets, permissions
from .serializers import CardSeiralizer


# Card Viewset
class CardViewSet(viewsets.ModelViewSet):
  queryset = Card.objects.all()
  permission_classes = [
      permissions.AllowAny
  ]
  serializer_class = CardSeiralizer
