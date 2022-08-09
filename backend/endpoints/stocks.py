from endpoints.base import Endpoint
import requests
from datetime import datetime as dt

class Stock():
    def __init__(self,ticker):
        self.ticker = ticker
    
    def get_response(self,start,end,multiplier=1,type='day',sort='asc',limit=120):
        url = (
                f'{Endpoint.BASE}'
                f'{Endpoint.VERSION2}'
                f'{Endpoint.AGGS}'
                f'{Endpoint.TICKR}/'
                f'{self.ticker}/'
                f'{Endpoint.RANGE}'
                f'{multiplier}/'
                f'{type}/'
                f'{start}/'
                f'{end}/'
                f'{Endpoint.ADJ}'
                f'{Endpoint.SRT}'
                f'{sort}'
                f'{Endpoint.LIMIT}'
                f'{limit}'
                f'&{Endpoint.KEY}'
        )

        try:
            response = requests.get(url).json()
            assert(response['status'] == 'OK'),'Bad Status'
            response = response['results']
            return response
        
        except requests.exceptions.MissingSchema:
            print('Invalid Url')
        
    def get_shares_outstanding(ticker):
        url = (
                f'{Endpoint.BASE}'
                f'{Endpoint.VERSION3}'
                f'{Endpoint.REFERENCE}'
                f'{Endpoint.TICKRS}'
                f'{ticker}'
                f'?{Endpoint.KEY}'
        )
        print(url)

        'https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=HjyevpfJE5F8NnzNU7zBptHjwf4DZ46w'
        
    
    @staticmethod
    def get_data(response):

        close = []
        for result in response:
            close.append((result['c'],(result['v']*result['c'])/10**9,dt.fromtimestamp(result['t']/1000).strftime('%Y-%m-%d')))

        
        data = {'Data':[{'Close ($)':c,'Volume (billion $)':v,'Date':d} for c,v,d in close]}
        return data
    
    








    
