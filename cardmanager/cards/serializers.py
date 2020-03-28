from rest_framework import serializers
from cards.models import Card


# Card Serailizer
class CardSeiralizer(serializers.ModelSerializer):
  class Meta:
    model = Card
    fields = '__all__'
