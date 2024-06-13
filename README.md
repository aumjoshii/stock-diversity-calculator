
# Stock Diversity Calculator

This project is a React-based application that allows users to manage a portfolio of stocks and calculate portfolio diversity based on the distribution of stocks across different sectors. The application provides a user-friendly interface for adding and removing stocks from the portfolio and displays the portfolio's diversity score.

## Features

- Add stocks to your portfolio.
- Remove stocks from your portfolio.
- Calculate and display the portfolio diversity score based on sector distribution.
- Responsive design with a dark theme and visually appealing color palette.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **CSS**: Styling the components.

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/aumjoshii/stock-diversity-calculator.git
   cd stock-diversity-calculator
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Start the Application**:
   ```sh
   npm start
   ```

The application will start on `http://localhost:3000`.

## Project Structure

```
stock-diversity-calculator/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── StockList.tsx
│   │   └── StockList.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Usage

- **Add Stock**: Click on the "Add to Portfolio" button next to the stock in the "All Stocks" section to add it to your portfolio.
- **Remove Stock**: Click on the stock button in the "User's Portfolio" section to remove it from your portfolio.
- **Reset Portfolio**: Click on the "Reset Portfolio" button to remove all stocks from your portfolio and reset the diversity score.

## Portfolio Diversity Calculation

The portfolio diversity is calculated based on the percentage of the portfolio dedicated to each sector. The formula used is:
\[ D = \left(1 - \sum_{i=1}^{n} w_i^2 \right) \times 100 \]
where \( w_i \) is the weight of each sector in the portfolio.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Aum Joshi - ajoshi95@asu.edu(mailto:ajoshi95@asu.edu)

Project Link: https://github.com/aumjoshii/stock-diversity-calculator(https://github.com/aumjoshii/stock-diversity-calculator)

