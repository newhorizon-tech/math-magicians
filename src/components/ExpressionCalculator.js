import { useState } from 'react';

const ExpressionCalculator = () => {
  const [result, setResult] = useState({});

  const handleData = async (exp) => {
    const response = await fetch(`http://api.mathjs.org/v4/?expr=${encodeURIComponent(exp)}`);
    if (response.status === 200) {
      const apiResult = await response.json();
      setResult((prevState) => ({ ...prevState, value: apiResult }));
    } else {
      setResult((prevState) => ({ ...prevState, error: 'Invalid Input' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.expression.value;
    handleData(input);
    form.reset();
  };

  return (
    <div>
      <h1> Expression calculator </h1>
      <p> Examples: 2+sqrt(25)+sqrt(100) </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="expression" placeholder="Enter math expression" />
        <button type="submit"> Calculate </button>
      </form>
      <p id="result">
        {result.error || result.value}
      </p>
    </div>
  );
};

export default ExpressionCalculator;
