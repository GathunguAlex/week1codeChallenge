import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search"
function AccountContainer() {
  const [transactions, setTransactions] = useState([]);// use state helps in handling fetched data from api
  function fetchTransactions(){
    fetch("http://localhost:8001/transactions")
      .then(resp => resp.json())
      .then((transaction) => setTransactions(transaction))
  }
  useEffect(fetchTransactions, []) //use effect is handle side effects within components,the empty array is run the side effect of use effect once when he component renders 
  console.log(transactions);
  function handleUpdateOnSubmission(newTransaction) {
    console.log(newTransaction);
    // adding new transaction to table
    setTransactions(transactions => [...transactions, newTransaction]);
    //posting data to backend
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });
  }
  function handleSearch(search){ // this function leaves values at default as fetched from api
    if(search===""){
      fetchTransactions(transactions)
    }else {
      const searchTransactions = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(search.toLowerCase())// changes and maintains input to lowercase
      })
      setTransactions(searchTransactions) }
    }
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm onSubmission={handleUpdateOnSubmission} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}
export default AccountContainer;









