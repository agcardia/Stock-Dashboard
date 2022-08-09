from flask import Flask
from endpoints.stocks import Stock
from endpoints.financials import Financials

app = Flask(__name__)

@app.route('/price/<ticker>')
def get_data(ticker):
    obj = Stock(ticker)
    response = obj.get_response('2022-06-01','2022-07-22')
    return obj.get_data(response)

@app.route('/financials/<ticker>')
def get_financials(ticker):
    obj = Financials(ticker)
    dates = ['2022-01-01','2022-04-01','2022-07-01']
    responses = [obj.get_response(date) for date in dates]
    return obj.get_data(responses)


if __name__ == '__main__':
    app.run(debug=True)