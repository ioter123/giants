from django.shortcuts import render
from .models import *
import pandas as pd
from django.utils.safestring import SafeString
from django.core import serializers
import datetime
from django.db.models import Q


def index(request):

    return render(request, "index.html")


def ticket_pop(request):
    game_info = Game.objects.filter(Q(game_month=datetime.datetime.now().month, game_day__gte=datetime.datetime.now().day) | Q(game_month__gt=datetime.datetime.now().month)).order_by('game_month', 'game_day')[:6]
    games = {'games': game_info}
    return render(request, 'ticket_pop.html', games)


def seat_select(request):
    game_date = request.POST['game_date']
    game_date = game_date.split('.')
    seat_data = Ticket.objects.filter(game_month=game_date[0], game_day=game_date[1])
    seat_df = pd.DataFrame.from_records(seat_data.values())
    seat_group = seat_df.groupby('seat_group').count()['check_ticket'].reset_index()
    seat_group = seat_group.to_json(orient='records', force_ascii=False)

    seat_price = seat_df.groupby(['seat_group','seat_block']).mean()['ticket_price'].reset_index()
    seat_col = seat_df.groupby(['seat_group','seat_block']).count()['check_ticket'].reset_index()
    seat = seat_col.merge(seat_price)
    seat = seat.to_json(orient='records', force_ascii=False)

    seat_info = serializers.serialize("json", seat_data)

    seats = {'seat_price': SafeString(seat), 'seat_group':  SafeString(seat_group), 'seat_info': SafeString(seat_info)}
    return render(request, 'seat_select.html', seats)
