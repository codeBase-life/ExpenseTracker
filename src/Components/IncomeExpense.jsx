import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const values = transactions.map((transaction) => transaction.amount);

  const income = values
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  const expense =
    values.filter((val) => val < 0).reduce((acc, val) => acc + val, 0) *
    -(1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
