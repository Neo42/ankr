from cards.models import Card
from rest_framework import viewsets, permissions
from .serializers import CardSeiralizer


# Card Viewset
class CardViewSet(viewsets.ModelViewSet):
  permission_classes = [
      permissions.IsAuthenticated
  ]
  serializer_class = CardSeiralizer

  def get_queryset(self):
    return self.request.user.cards.all()

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)
