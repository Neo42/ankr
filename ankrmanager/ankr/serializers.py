from rest_framework import serializers
from ankr.models import Ankr


# Ankr Serailizer
class AnkrSeiralizer(serializers.ModelSerializer):
  class Meta:
    model = Ankr
    fields = '__all__'
