import React, { useState } from 'react';
import './ProfitCalculator.css';

function ProfitCalculator() {
  const [gpCost, setGpCost] = useState('');
  const [labourCost, setLabourCost] = useState('');
  const [scrapPercentage, setScrapPercentage] = useState('');
  const [ghamelaSellingPrice, setGhamelaSellingPrice] = useState('');
  const [scrapSellingPrice, setScrapSellingPrice] = useState('');
  const [profit, setProfit] = useState(null);

  const calculateProfit = (e) => {
    e.preventDefault();

    const gpCostNum = parseFloat(gpCost);
    const labourCostNum = parseFloat(labourCost);
    const scrapPercentageNum = parseFloat(scrapPercentage) / 100;
    const ghamelaSellingPriceNum = parseFloat(ghamelaSellingPrice);
    const scrapSellingPriceNum = parseFloat(scrapSellingPrice);

    if (isNaN(gpCostNum) || isNaN(labourCostNum) || isNaN(scrapPercentageNum) || isNaN(ghamelaSellingPriceNum) || isNaN(scrapSellingPriceNum)) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const totalCost = gpCostNum + labourCostNum;
    const scrapWeight = 1 * scrapPercentageNum;
    const usableWeight = 1 - scrapWeight;
    const ghamelaRevenue = usableWeight * ghamelaSellingPriceNum;
    const scrapRevenue = scrapWeight * scrapSellingPriceNum;
    const totalRevenue = ghamelaRevenue + scrapRevenue;
    const profit = totalRevenue - totalCost;

    setProfit(profit.toFixed(2));
  };

  return (
    <div className="fullscreen-container">
      <div className="profit-calculator-form">
        <h2 className="mb-4">Ghamela Profit Calculator</h2>
        <form onSubmit={calculateProfit}>
          <div className="form-group">
            <label>GP Coil Cost (₹/kg) </label>
            <input
              type="number"
              className="form-control"
              value={gpCost}
              onChange={(e) => setGpCost(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Labour Cost (₹/kg) </label>
            <input
              type="number"
              className="form-control"
              value={labourCost}
              onChange={(e) => setLabourCost(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Scrap Percentage (%) </label>
            <input
              type="number"
              className="form-control"
              value={scrapPercentage}
              onChange={(e) => setScrapPercentage(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Ghamela Selling Price (₹/kg) </label>
            <input
              type="number"
              className="form-control"
              value={ghamelaSellingPrice}
              onChange={(e) => setGhamelaSellingPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Scrap Selling Price (₹/kg) </label>
            <input
              type="number"
              className="form-control"
              value={scrapSellingPrice}
              onChange={(e) => setScrapSellingPrice(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Calculate Profit</button>
        </form>

        {profit !== null && (
          <div className="alert alert-success mt-4">
            <h4>Profit per kg of GP Coil: ₹{profit}</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfitCalculator;
