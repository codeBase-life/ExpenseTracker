import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
function Balance() {
  const { transactions } = useContext(GlobalContext);

  let total = 0;
  transactions.forEach((transaction) => {
    total += transaction.amount;
  });

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;
