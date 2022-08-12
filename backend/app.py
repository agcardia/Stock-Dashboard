from flask import Flask
from datetime import datetime
from endpoints.stocks import Stock
from endpoints.financials import Financials
import dateutil.relativedelta

app = Flask(__name__)

start = (datetime.now()+dateutil.relativedelta.relativedelta(days=-15)).strftime('%Y-%m-%d')
end = (datetime.now()).strftime('%Y-%m-%d')


@app.route('/price/<ticker>')
def get_data(ticker):
    obj = Stock(ticker)
    response = obj.get_response(start,end)
    return obj.get_data(response)

@app.route('/price/<ticker>/1')
def get_month_day(ticker):
    start = (datetime.now()+dateutil.relativedelta.relativedelta(months=-1)).strftime('%Y-%m-%d')
    obj = Stock(ticker)
    response = obj.get_response(start,end)
    return obj.get_data(response)

@app.route('/price/<ticker>/2')
def get_two_month_data(ticker):
    start = (datetime.now()+dateutil.relativedelta.relativedelta(months=-2)).strftime('%Y-%m-%d')
    obj = Stock(ticker)
    response = obj.get_response(start,end)
    return obj.get_data(response)

@app.route('/price/<ticker>/3')
def get_year_data(ticker):
    start = (datetime.now()+dateutil.relativedelta.relativedelta(months=-12)).strftime('%Y-%m-%d')
    obj = Stock(ticker)
    response = obj.get_response(start,end)
    return obj.get_data(response)

@app.route('/financials/<ticker>')
def get_financials(ticker):
    obj = Financials(ticker)
    dates = ['2022-01-01','2022-04-01','2022-07-01']
    responses = [obj.get_response(date) for date in dates]
    return obj.get_data(responses)


if __name__ == '__main__':
    app.run(debug=True)