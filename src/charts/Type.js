export const types = [
  "NIFTY 50",
  "NIFTY NEXT 50",
  "NIFTY MIDCAP 50",
  "NIFTY SMLCAP 50",
  "NIFTY SMLCAP 250",
  "NIFTY MIDSML 400",
  "NIFTY AUTO",
  "NIFTY BANK",
  "NIFTY ENERGY",
  "NIFTY FIN SERVICE",
  "NIFTY FMCG",
  "NIFTY IT",
  "NIFTY MEDIA",
  "NIFTY METAL",
  "NIFTY PHARMA",
  "NIFTY PSU BANK",
  "NIFTY REALTY",
  "NIFTY PVT BANK",
  "NIFTY COMMODITIES",
  "NIFTY CONSUMPTION",
  "NIFTY CPSE",
  "NIFTY INFRA",
  "NIFTY MNC",
  "NIFTY GROWSECT 15",
  "NIFTY PSE",
  "NIFTY SERV SECTOR",
  "NIFTY100 LIQ 15",
  "NIFTY MID LIQ 15",
  "NIFTY DIV OPPS 50",
  "NIFTY50 VALUE 20",
  "NIFTY100 QUALTY30",
  "NIFTY50 EQL WGT",
  "NIFTY100 LOWVOL30",
  "NIFTY ALPHA 50",
  "NIFTY200 QUALTY30",
  "Sovereign Gold Bonds",
  "FO Stocks",
  "ETF",
  "Gold ETF",
  "Nifty 50 ETF",
];

export const map = {
  "NIFTY 50": "^NSEI",
  "NIFTY NEXT 50": "^NSMIDCP",
  "NIFTY MIDCAP 50": "^NSEMDCP50",
  "NIFTY SMLCAP 50": "NIFTYSMLCAP50.NS",
  "NIFTY SMLCAP 250": "NIFTYSMLCAP250.NS",
  "NIFTY MIDSML 400": "NIFTYMIDSML400.NS",
  "NIFTY AUTO": "^CNXAUTO",
  "NIFTY BANK": "^NSEBANK",
  "NIFTY ENERGY": "^CNXENERGY",
  "NIFTY FIN SERVICE": "NIFTY_FIN_SERVICE.NS",
  "NIFTY FMCG": "^CNXFMCG",
  "NIFTY IT": "^CNXIT",
  "NIFTY MEDIA": "^CNXMEDIA",
  "NIFTY METAL": "^CNXMETAL",
  "NIFTY PHARMA": "^CNXPHARMA",
  "NIFTY PSU BANK": "^CNXPSUBANK",
  "NIFTY REALTY": "^CNXREALTY",
  "NIFTY PVT BANK": "NIFTY_PVT_BANK.NS",
  "NIFTY COMMODITIES": "^CNXCMDT",
  "NIFTY CONSUMPTION": "^CNXCONSUM",
  "NIFTY CPSE": "NIFTY_CPSE.NS",
  "NIFTY INFRA": "^CNXINFRA",
  "NIFTY MNC": "^CNXMNC",
  "NIFTY GROWSECT 15": "NI15.NS",
  "NIFTY PSE": "^CNXPSE",
  "NIFTY SERV SECTOR": "^CNXSERVICE",
  "NIFTY100 LIQ 15": "LIX15.NS",
  "NIFTY MID LIQ 15": "NIFTYMIDLIQ15.NS",
  "NIFTY DIV OPPS 50": "^CNXDIVOP",
  "NIFTY50 VALUE 20": "NV20.NS",
  "NIFTY100 QUALTY30": "NIFTYQUALITY30.NS",
  "NIFTY50 EQL WGT": "NIFTY50EQUALWEIGHT.NS",
  "NIFTY100 LOWVOL30": "NIFTY100LOWVOL30.NS",
  "NIFTY ALPHA 50": "NIFTYALPHA50.NS",
  "NIFTY200 QUALTY30": "NIFTY200QUALTY30.NS",
  "Bitcoin USD": "BTC-USD",
  "Ethereum USD": "ETH-USD",
  "Dogecoin USD": "DOGE-USD",
  "Binance Coin USD": "BNB-USD",
  "XRP USD": "XRP-USD",
};
export const mouseEdgeAppearance = {
  textFill: "#542605",
  stroke: "#05233B",
  strokeOpacity: 1,
  strokeWidth: 2,
  arrowWidth: 5,
  fill: "#BCDEFA", 
  fitToText:1
};

export const height_map = {
  "EMA 5-100": 0,
  MACD: 150,
  "Stochastic Oscillator": 125,
  mainChart: 400,
  RSI: 125,
  "Bollinger Band": 0,
  "Elder Ray": 100,
  "Elder Ray(Bull Power)": 100,
  "Elder Ray(Bear Power)": 100,
};
export const initialIndicatorState = {
  indicators: ["mainChart"],
  MACD: 0,
  "Stochastic Oscillator": 0,
  RSI: 0,
  height: 400,
  "EMA 5-100": 0,
  bottom: "mainChart",
  "Elder Ray": 0,
  "Elder Ray(Bull Power)": 0,
  "Elder Ray(Bear Power)": 0,
};

export const mainChartindicators = { "EMA 5-100": 1, "Bollinger Band": 1 };
export const indicators = [
  "EMA 5-100",
  "MACD",
  "Stochastic Oscillator",
  "RSI",
  "Bollinger Band",
  "Elder Ray",
  "Elder Ray(Bull Power)",
  "Elder Ray(Bear Power)",
];
