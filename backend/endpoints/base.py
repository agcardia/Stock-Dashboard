from dataclasses import dataclass
import configparser

cfg = configparser.ConfigParser()
cfg.read('KEYS.cfg')
API_KEY = cfg.get('KEYS','api_key')


@dataclass(frozen=True)
class Endpoint():
    BASE='https://api.polygon.io/'
    VERSION1='v1/'
    VERSION2='v2/'
    VERSION3='v3/'
    VERSIONX='vX/'
    GROUPED='grouped/'
    TICKR='ticker'
    TICKRS='tickers/'
    RANGE='range/'
    AGGS='aggs/'
    REFERENCE='reference/'
    FINANCIALS='financials?'
    ADJ='?adjusted=true'
    REF = 'reference/'
    SRT='&sort='
    LIMIT='&limit='
    DATE_FROM = '&period_of_report_date.lte='
    TIMEFRAME = '&timeframe='
    KEY=f'apikey={API_KEY}'



