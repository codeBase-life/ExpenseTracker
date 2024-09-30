import { useState } from "react";

import "./App.css";
import { GlobalProvider } from "./Context/GlobalState.jsx";
import {
  Header,
  Balance,
  AddTransaction,
  IncomeExpense,
  Transaction,
  TransactionList,
} from "./Components";

function App() {
  const [expense, setExpense] = useState(0);

  const AddValues = (expense) => {
    console.log(expense);
  };
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
