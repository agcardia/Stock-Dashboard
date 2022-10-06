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

![Text](/Dashboard.png?raw=True)


This applicaiton uses the [Polygon](https://polygon.io) api for acessing company stock and financial data. You will need to generate a free API key to use the application. To update the app to use you API key simply add your key to the KEYS.cfg file in the backend folder.

````
.
├── README.md
├── backend
│   ├── KEYS.cfg
│   ├── app.py
│   ├── dockerfile
│   ├── endpoints
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── financials.py
│   │   └── stocks.py
│   └── requirements.txt
├── docker-compose.yml
└── frontend
    ├── dockerfile
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── index.html
    └── src
        ├── App.css
        ├── App.js
        ├── components
        │   ├── Dropdown
        │   │   └── Dropdown.jsx
        │   ├── Graph
        │   │   ├── Bar.jsx
        │   │   └── Line.jsx
        │   └── Submit
        │       ├── Submit.css
        │       └── Submit.jsx
        ├── index.css
        └── index.js
 ```
