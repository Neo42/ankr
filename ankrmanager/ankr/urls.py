from rest_framework import routers
from .api import AnkrViewSet

router = routers.DefaultRouter()
router.register('api/ankr', AnkrViewSet, 'ankr')

urlpatterns = router.urls
