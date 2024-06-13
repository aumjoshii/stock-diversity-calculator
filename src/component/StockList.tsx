import React, { useState, useEffect } from 'react';
import './StockList.css'; // Import CSS file for styling

interface StockData {
  ticker: string;
  price: number;
  sector: string;
}

export const StockList: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([
    { ticker: "AAPL", price: 142.23, sector: "Technology" },
    { ticker: "MSFT", price: 253.43, sector: "Technology" },
    { ticker: "AMZN", price: 3278.39, sector: "Consumer Discretionary" },
    { ticker: "GOOGL", price: 2531.45, sector: "Communication Services" },
    { ticker: "FB", price: 331.26, sector: "Communication Services" },
    { ticker: "JPM", price: 157.88, sector: "Financials" },
    { ticker: "JNJ", price: 168.52, sector: "Health Care" },
    { ticker: "TSLA", price: 609.89, sector: "Consumer Discretionary" },
    { ticker: "BRK.B", price: 277.29, sector: "Financials" },
    { ticker: "V", price: 241.75, sector: "Information Technology" },
    { ticker: "PG", price: 137.29, sector: "Consumer Staples" },
    { ticker: "KO", price: 54.72, sector: "Consumer Staples" },
    { ticker: "XOM", price: 65.35, sector: "Energy" },
    { ticker: "CVX", price: 101.72, sector: "Energy" },
    { ticker: "UNH", price: 398.56, sector: "Health Care" },
    { ticker: "PFE", price: 35.21, sector: "Health Care" },
    { ticker: "T", price: 29.75, sector: "Communication Services" },
    { ticker: "BA", price: 219.02, sector: "Industrials" },
    { ticker: "CAT", price: 222.00, sector: "Industrials" },
    { ticker: "MMM", price: 167.67, sector: "Industrials" },
    { ticker: "DIS", price: 178.02, sector: "Communication Services" },
    { ticker: "NKE", price: 134.62, sector: "Consumer Discretionary" },
    { ticker: "MCD", price: 229.43, sector: "Consumer Discretionary" },
    { ticker: "GS", price: 319.68, sector: "Financials" }
  ]);

  const [portfolio, setPortfolio] = useState<StockData[]>([]);
  const [diversity, setDiversity] = useState<number>(0);

  useEffect(() => {
    const calculatePortfolioDiversity = () => {
      if (portfolio.length === 0) {
        setDiversity(0); // Set diversity to 0 if the portfolio is empty
        return;
      }

      const sectorWeights: { [key: string]: number } = {};
      let totalPortfolioValue = 0;

      // Calculate total portfolio value and sector weights
      portfolio.forEach((stock) => {
        totalPortfolioValue += stock.price;
        if (sectorWeights[stock.sector]) {
          sectorWeights[stock.sector] += stock.price;
        } else {
          sectorWeights[stock.sector] = stock.price;
        }
      });

      let diversityScore = 0;

      // Calculate the weighted diversity score
      Object.values(sectorWeights).forEach((weight) => {
        const sectorWeight = weight / totalPortfolioValue;
        diversityScore += Math.pow(sectorWeight, 2);
      });

      diversityScore = (1 - diversityScore) * 100;
      setDiversity(diversityScore);
    };

    calculatePortfolioDiversity();
  }, [portfolio]);

  const addToPortfolio = (ticker: string) => {
    const selectedStock = stocks.find(stock => stock.ticker === ticker);
    if (selectedStock) {
      setPortfolio([...portfolio, selectedStock]);
      setStocks(stocks.filter(stock => stock.ticker !== ticker));
    }
  };

  const removeFromPortfolio = (ticker: string) => {
    const removedStock = portfolio.find(stock => stock.ticker === ticker);
    if (removedStock) {
      setStocks([...stocks, removedStock]);
      setPortfolio(portfolio.filter(stock => stock.ticker !== ticker));
    }
  };

  const resetPortfolio = () => {
    setStocks([...stocks, ...portfolio]);
    setPortfolio([]);
  };

  return (
    <div className="container">
      <h1>Stock Diversity Calculator</h1>
      <div className="top-section">
        <div className="portfolio-container">
          <h2>User's Portfolio</h2>
          <div className="portfolio-list">
            {portfolio.map((stock) => (
              <button key={stock.ticker} className="stock-button" onClick={() => removeFromPortfolio(stock.ticker)}>
                {stock.ticker} - ${stock.price.toFixed(2)} - {stock.sector}
              </button>
            ))}
          </div>
          <button className="reset-button" onClick={resetPortfolio}>Reset Portfolio</button>
        </div>

        <div className="diversity-container">
          <h2>Portfolio Diversity</h2>
          <div className="diversity-score">
            Diversity: {diversity.toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="stocks-container">
        <h2>All Stocks (with Sectors)</h2>
        <div className="stocks-list">
          {stocks.map((stock) => (
            <button key={stock.ticker} className="stock-button" onClick={() => addToPortfolio(stock.ticker)}>
              {stock.ticker} - ${stock.price.toFixed(2)} - {stock.sector}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
