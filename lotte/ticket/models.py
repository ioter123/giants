from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=32,verbose_name='유저이름')
    password = models.CharField(max_length=64,verbose_name='비밀번호')

    class Meta:
        db_table = 'user_table'


class Ticket(models.Model):
    game_vs = models.CharField(max_length=32, verbose_name='경기 상대')
    game_month = models.IntegerField(verbose_name='월')
    game_day = models.IntegerField(verbose_name='일')
    game_week = models.CharField(max_length=32, verbose_name='요일')
    game_time = models.CharField(max_length=32, verbose_name='시작시간')
    seat_group = models.CharField(max_length=32, verbose_name='좌석 분류')
    seat_block = models.CharField(max_length=32, verbose_name='좌석 블록')
    seat_col = models.IntegerField(verbose_name='좌석 열')
    seat_no = models.IntegerField(verbose_name='좌석 번호')
    seat_set_no = models.IntegerField(verbose_name='좌석 세트 번호')
    ticket_price = models.IntegerField(verbose_name='티켓 가격')
    check_ticket = models.IntegerField(verbose_name='예매 여부')

    class Meta:
        db_table = 'ticket_info'


class Game(models.Model):
    game_vs = models.CharField(max_length=32, verbose_name='경기 상대')
    game_month = models.IntegerField(verbose_name='월')
    game_day = models.IntegerField(verbose_name='일')
    game_week = models.CharField(max_length=32, verbose_name='요일')
    game_time = models.CharField(max_length=32, verbose_name='시작시간')
    game_icon = models.CharField(max_length=64, verbose_name='아이콘링크')

    class Meta:
        db_table = 'game_info'

