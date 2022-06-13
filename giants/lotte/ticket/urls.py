from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('ticket_pop',views.ticket_pop),
    path('seat_select',views.seat_select),
]
