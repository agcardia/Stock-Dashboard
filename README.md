# Stock Dashboard App
This is a full stack application that allows a user to stock price data and quarterly financials data from a publicly traded company. 

# Installation
To install the app clone the github repo onto your computer. 
```bash
git clone git@github.com:agcardia/Stock-Dashboard.git
 ```
Next cd into the folder Stock-Dashboard and build the Docker container which will run the app. 
```bash
cd Stock-Dashboard && docker-compose up
```
# Overview

This application uses the [Polygon](https://polygon.io) api for acessing company stock and financial data. You will need to generate a free API key to use the application. To update the app to use you API key simply add your key to the KEYS.cfg file in the backend folder.

```
.
├── README.md
├── backend
│   ├── KEYS.cfg
│   ├── app.py
│   ├── dockerfile
│   ├── endpoints
```

![Text](/Dashboard.png?raw=True)

To use the dashboard type in a ticker into the search bar and press submit. The dahsboard will display the following four panels; a graph of the stock price vs time, a graph of the volume traded vs time, a graph of the earnings per share for the last 3 financials quarters, and a graph of the total revenue over the last three financial quarters. Use the timeframe menu to select the time window for the price and volume charts.

