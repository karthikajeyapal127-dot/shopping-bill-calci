import { useState } from "react";

function App() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");

  function calculate() {
    if (Number(price) >= 0 &&
        price !== "" &&
        Number(quantity) > 0) {
      setTotal(Number(price) * Number(quantity));
    } else {
      setTotal("Enter valid values");
    }
  }

  return (
    <div>
      <h1>Shopping Bill Calculator</h1>

      <input type="number" placeholder="Item Price"
        onChange={e => setPrice(e.target.value)} />

      <input type="number" placeholder="Quantity"
        onChange={e => setQuantity(e.target.value)} />

      <button onClick={calculate}>Calculate Bill</button>

      <h2>Total Bill: ₹{total}</h2>
    </div>
  );
}

export default App;