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
    { ticker: "V", price: 241.75, sector: "Information Technology" }
  ]);

  const [portfolio, setPortfolio] = useState<StockData[]>([]);
  const [diversity, setDiversity] = useState<number>(0);

  useEffect(() => {
    const calculatePortfolioDiversity = () => {
      if (portfolio.length === 0) {
        setDiversity(0);
        return;
      }

      const sectorWeights: { [key: string]: number } = {};
      let totalPortfolioValue = 0;

      portfolio.forEach((stock) => {
        totalPortfolioValue += stock.price;
        if (sectorWeights[stock.sector]) {
          sectorWeights[stock.sector] += stock.price;
        } else {
          sectorWeights[stock.sector] = stock.price;
        }
      });

      let diversityScore = 0;
      const numSectors = Object.keys(sectorWeights).length;
      Object.values(sectorWeights).forEach((weight) => {
        const sectorWeight = weight / totalPortfolioValue;
        diversityScore += Math.pow(sectorWeight, 2);
      });
      diversityScore = (1 - diversityScore / (numSectors * numSectors)) * 100;
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

  return (
    <div className="container">
      <div className="stocks-container">
        <h2>All Stocks</h2>
        <div className="stocks-list">
          {stocks.map((stock) => (
            <button key={stock.ticker} onClick={() => addToPortfolio(stock.ticker)}>
              {stock.ticker} - ${stock.price.toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      <div className="diversity-container">
        <h2>Portfolio Diversity</h2>
        <div className="diversity-score">
          Diversity: {diversity.toFixed(2)}%
        </div>
      </div>

      <div className="portfolio-container">
        <h2>User's Portfolio</h2>
        <div className="portfolio-list">
          {portfolio.map((stock) => (
            <button key={stock.ticker} onClick={() => removeFromPortfolio(stock.ticker)}>
              {stock.ticker} - ${stock.price.toFixed(2)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


