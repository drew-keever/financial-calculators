import { useState } from 'react';
import './index.css';

function App() {
  const [currentAge, setCurrentAge] = useState(30);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(7);
  
  const yearsToRetirement = 65 - currentAge;
  const annualReturn = expectedReturn / 100;
  
  // Future Value calculation
  const futureValueOfSavings = currentSavings * Math.pow(1 + annualReturn, yearsToRetirement);
  const futureValueOfContributions = monthlyContribution * 12 * 
    ((Math.pow(1 + annualReturn, yearsToRetirement) - 1) / annualReturn);
  const totalAtRetirement = futureValueOfSavings + futureValueOfContributions;

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <div className="calculator-header">
          <h1>Retirement Savings Calculator</h1>
          <p className="subtitle">See how your savings could grow by retirement</p>
        </div>
        
        <div className="calculator-body">
          <div className="input-section">
            <div className="input-group">
              <label>
                <span className="label-text">Current Age</span>
                <span className="label-value">{currentAge} years</span>
              </label>
              <input 
                type="range" 
                min="18" 
                max="64" 
                value={currentAge} 
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="slider"
              />
            </div>
            
            <div className="input-group">
              <label>
                <span className="label-text">Current Savings</span>
                <span className="label-value">${currentSavings.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="500000" 
                step="5000"
                value={currentSavings} 
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="slider"
              />
            </div>
            
            <div className="input-group">
              <label>
                <span className="label-text">Monthly Contribution</span>
                <span className="label-value">${monthlyContribution.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="3000" 
                step="50"
                value={monthlyContribution} 
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="slider"
              />
            </div>
            
            <div className="input-group">
              <label>
                <span className="label-text">Expected Annual Return</span>
                <span className="label-value">{expectedReturn}%</span>
              </label>
              <input 
                type="range" 
                min="3" 
                max="12" 
                step="0.5"
                value={expectedReturn} 
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="slider"
              />
            </div>
          </div>
          
          <div className="results-section">
            <div className="result-card">
              <div className="result-label">Projected Savings at Age 65</div>
              <div className="result-amount">${Math.round(totalAtRetirement).toLocaleString()}</div>
              <div className="result-breakdown">
                <div className="breakdown-item">
                  <span>From current savings:</span>
                  <span>${Math.round(futureValueOfSavings).toLocaleString()}</span>
                </div>
                <div className="breakdown-item">
                  <span>From contributions:</span>
                  <span>${Math.round(futureValueOfContributions).toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="cta-section">
              <p className="cta-text">Ready to make your plan a reality?</p>
              <a href="https://advisorfinder.com/app/assessment" className="cta-button" target="_parent">
                Find Your Financial Advisor
              </a>
            </div>
          </div>
        </div>
        
        <div className="calculator-footer">
          <p className="disclaimer">This calculator provides estimates based on the inputs provided. Actual results may vary. Past performance does not guarantee future results.</p>
        </div>
      </div>
    </div>
  );
}

export default App;