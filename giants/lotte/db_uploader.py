import os
import django
import pandas as pd

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "lotte.settings")
django.setup()

from ticket.models import *

data = pd.read_csv('ticket/data/lotte_data.csv', encoding='cp949')
game = pd.read_csv('ticket/data/game.csv', encoding='cp949')

"""
for i in range(len(game)):
    Game.objects.create(
        game_vs = game.loc[i,'경기상대'],
        game_month = game.loc[i,'월'],
        game_day = game.loc[i,'일'],
        game_week = game.loc[i,'요일'],
        game_time = game.loc[i,'시작시간'],
        game_icon = game.loc[i, '링크']
    )
"""
# 데이터 수정
"""
for i in range(len(data['game_vs'])):
    ticket = Ticket.objects.filter(game_month=data.loc[i, 'game_month'], game_day=data.loc[i, 'game_day'], 
                                   game_vs=data.loc[i, 'game_vs'], seat_group=data.loc[i, 'seat_group'],
                                   seat_block=data.loc[i, 'seat_block'], seat_col=data.loc[i, 'seat_col'],
                                   seat_no=data.loc[i, 'seat_no'])
    ticket.ticket_price = data.loc[i, 'ticket_price']
"""

# 데이터 추가
data2 = pd.read_csv('ticket/data/lotte_data2.csv', encoding='cp949')
for i in range(len(data)):
    Ticket.objects.create(
        game_vs = data2.loc[i,'game_vs'],
        game_month = data2.loc[i,'game_month'],
        game_day = data2.loc[i,'game_day'],
        game_week = data2.loc[i,'game_week'],
        game_time = data2.loc[i,'game_time'],
        seat_group = data2.loc[i,'seat_group'],
        seat_block = data2.loc[i,'seat_block'],
        seat_col = data2.loc[i,'seat_col'],
        seat_no = data2.loc[i,'seat_no'],
        seat_set_no = data2.loc[i,'seat_set_no'],
        ticket_price = data2.loc[i,'ticket_price'],
        check_ticket = data2.loc[i,'check_ticket']
    )






