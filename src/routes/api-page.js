import { useState } from 'react';

const ApiPage = () => {
  // const result = 5;
  const [result, setResult] = useState({ value: 5 });
  const handleResult = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.expression.value;
    form.reset();
    setResult((prevState) => ({ value: prevState.value + parseInt(input, 10) }));
  };

  return (
    <div>
      <h1> API </h1>
      <form onSubmit={(e) => handleResult(e)}>
        <input id="expression" placeholder="Enter math expression" />
        <button type="submit"> Calculate </button>
      </form>
      <p id="result">
        {result.value}
      </p>
    </div>
  );
};
export default ApiPage;
