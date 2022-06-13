import os
import django
import pandas as pd
import numpy as np
from sklearn.linear_model import ElasticNet
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "lotte.settings")
django.setup()

#from ticket.models import *


game_ticket_price = pd.read_csv('./ticket/data/game_ticket_price.csv', encoding='utf-8')

# 데이터 전처리
dynamic_value = pd.read_csv('./ticket/data/dynamic_value_ex.csv', encoding='cp949')

num = ['출전선수연봉합', '롯데순위', '상대팀순위', '기온', '습도', '강수확률', '익사이팅점수']
cg = ['주말여부','다른중요경기여부', '라이벌여부', '시즌진행도', '사회적이슈여부']
X = dynamic_value[num+cg]
Y = dynamic_value['직전경기대비티켓판매량증감률']

# 빅데이터 분석을 통한 가격 예측 모델 생성 - 테스트용 모델


El= ElasticNet().fit(X, Y)
print('절편: ', np.round(El.intercept_, 3))
print('가중치: ', np.round(El.coef_, 3))

# 가격이 변동될 경기 날짜 선택
change_game_date = '5/11'

# 가격 변동될 경기에 대한 데이터 입력
teat_data = {
'출전선수연봉합' : [0.60],
'롯데순위' : [2],
'상대팀순위' : [4],
'기온' : [2.7],
'습도' : [0.55],
'강수확률' : [0.50],
'익사이팅점수' : [7.51],
'주말여부' : [0],
'다른중요경기여부' : [0],
'라이벌여부' : [1],
'시즌진행도' : [1],
'사회적이슈여부' : [0]
}

test = pd.DataFrame(teat_data)

# 가격 변동 비율 예측
pred = El.predict(test)
print(pred[0])


# 데이터 수정

change_game_month = int(change_game_date.split('/')[0])
change_game_day = int(change_game_date.split('/')[1])

game_ticket_price['ticket_price'] = game_ticket_price.apply(lambda row : np.round(int(row['ticket_price'])*(1+pred[0]/100),-2) if (row['game_month'] == change_game_month) and (row['game_day'] == change_game_day) else int(row['ticket_price']), axis=1)

game_ticket_price.to_csv('./ticket/data/game_ticket_price.csv', index=False)


# 최종 예측된 가격 db에 저장
"""
ticket = Ticket.objects.filter(game_month=data.loc[0,'game_month'], game_day=data.loc[0, 'game_day'])

for i in range(len(data['game_vs'])):
    ticket_1 = ticket.get(game_vs=data.loc[i, 'game_vs'], seat_group=data.loc[i, 'seat_group'],
            seat_block=str(data.loc[i, 'seat_block']), seat_col=data.loc[i, 'seat_col'],
            seat_no=data.loc[i, 'seat_no'])
    ticket_1.ticket_price=np.round(ticket_1.ticket_price*(1+pred[0]/100),-2)
    ticket_1.save()
"""








