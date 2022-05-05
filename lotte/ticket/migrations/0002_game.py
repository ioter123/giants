# Generated by Django 4.0.4 on 2022-04-30 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game_vs', models.CharField(max_length=32, verbose_name='경기 상대')),
                ('game_month', models.IntegerField(verbose_name='월')),
                ('game_day', models.IntegerField(verbose_name='일')),
                ('game_week', models.CharField(max_length=32, verbose_name='요일')),
                ('game_time', models.CharField(max_length=32, verbose_name='시작시간')),
                ('game_icon', models.CharField(max_length=64, verbose_name='아이콘링크')),
            ],
            options={
                'db_table': 'game_info',
            },
        ),
    ]
