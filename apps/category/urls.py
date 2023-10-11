from django.urls import path
from .views import *

urlpatterns = [
    path('list', ListCategory.as_view())
]