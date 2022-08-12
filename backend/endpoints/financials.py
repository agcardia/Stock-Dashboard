from endpoints.base import Endpoint
import requests
from datetime import datetime as dt

'https://api.polygon.io/vX/reference/financials?ticker=AAPL&period_of_report_date.gte=2022-04-02&timeframe=quarterly&apiKey=key'

class Financials():
    def __init__(self,ticker):
        self.ticker = ticker
    
    def get_response(self,date,timeframe='quarterly'):
        url = (
                f'{Endpoint.BASE}'
                f'{Endpoint.VERSIONX}'
                f'{Endpoint.REFERENCE}'
                f'{Endpoint.FINANCIALS}'
                f'{Endpoint.TICKR}='
                f'{self.ticker}'
                f'{Endpoint.DATE_FROM}'
                f'{date}'
                f'{Endpoint.TIMEFRAME}'
                f'{timeframe}'
                f'&{Endpoint.KEY}'
        )

        try:
            response = requests.get(url).json()
            assert(response['status'] == 'OK'),'Bad Status'
            response = response['results']
            return response
        
        except requests.exceptions.MissingSchema:
            print('Invalid Url')
        
        
    
    @staticmethod
    def get_data(responses):
        res = []
        for response in responses:
            for result in response:
                res.append((f'{result["fiscal_period"]} {result["fiscal_year"]}',
                result["financials"]["income_statement"]["basic_earnings_per_share"]["value"],
                result["financials"]["income_statement"]["revenues"]["value"]))

        data = {'Data':[{'Period':d,'Earnings ($)':e,'Revenue (billion $)':p/10**9} for d,e,p in res]}
        return data
