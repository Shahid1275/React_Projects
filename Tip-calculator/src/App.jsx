import React, { useState } from "react";

const App = () => {
  const [bill, setBill] = useState("");
  const [yourTipPercentage, setYourTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCalculate = () => {
    const numericBill = parseFloat(bill) || 0;
    const yourTip = (numericBill * yourTipPercentage) / 100;
    const friendTip = (numericBill * friendTipPercentage) / 100;
    setTotal(numericBill + yourTip + friendTip);
  };

  const handleReset = () => {
    setBill("");
    setYourTipPercentage(0);
    setFriendTipPercentage(0);
    setTotal(0);
  };

  return (
    <div>
      <p>
        How much was the bill?
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="Enter bill amount"
        />
      </p>
      <p>How did you like the service?</p>
      <select
        name="yourService"
        value={yourTipPercentage}
        onChange={(e) => setYourTipPercentage(Number(e.target.value))}
      >
        <option value="0">Disqualified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing (20%)</option>
      </select>
      <p>How did your friend like the service?</p>
      <select
        name="friendService"
        value={friendTipPercentage}
        onChange={(e) => setFriendTipPercentage(Number(e.target.value))}
      >
        <option value="0">Disqualified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing (20%)</option>
      </select>
      <p>
        You paid the total bill (including tips): <strong>${total.toFixed(2)}</strong>
      </p>
      <button onClick={handleCalculate}>Calculate Total</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
