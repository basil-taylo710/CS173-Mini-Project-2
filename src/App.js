import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import { addBalanceOwnerOperation, addBalanceCounterpartyOperation, claimOwnerOperation, claimCounterpartyOperation, revertFundOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [balanceowner, setBalanceOwner] = useState(0);
  const [balancecounterparty, setBalanceCounterparty] = useState(0);

  useEffect(() => {
    (async () => {
      const storage = await fetchStorage();
      setBalanceOwner(Number(storage.balanceOwner)/1000000);
      setBalanceCounterparty(Number(storage.balanceCounterparty)/1000000);
    })();
  }, []);

  const onAddBalanceOwner = async () => {
    try{
      setLoading(true);
      var x = document.getElementById("Owner Amount").value;
      await addBalanceOwnerOperation(x);
      alert("Transaction Successful");
    }
    catch(e){
      throw e;
    }
    setLoading(false);
  };

  const onAddBalanceCounterparty = async () => {
    try{
      setLoading(true);
      var x = document.getElementById("Counterparty Amount").value;
      await addBalanceCounterpartyOperation(x);
      alert("Transaction Successful");
    }
    catch(e){
      throw e;
    }
    setLoading(false);
  };

  const onClaimOwner = async () => {
    try{
      setLoading(true);
      
      await claimOwnerOperation();
      alert("Transaction Successful");
    }
    catch(e){
      throw e;
    }
    setLoading(false); 
  };

  const onClaimCounterparty = async () => {
    try{
      setLoading(true);
      var x = document.getElementById("Counterparty Hash Secret").value;
      await claimCounterpartyOperation("01223344");
      alert("Transaction Successful");
    }
    catch(e){
      throw e;
    }
    setLoading(false); 
  };
 
  const onRevertFund = async () => {
    try{
      setLoading(true);
      await revertFundOperation();
      alert("Transaction Successful");
    }
    catch(e){
      throw e;
    }
    setLoading(false); 
  };

  return (
    <div className="h-100">
      <Navbar/>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        Tez Amount
        <input type="number" id="Owner Amount" min="1"></input>
        <button onClick={onAddBalanceOwner} className="btn btn-primary btn-lg">
          {loading ? "..." : "Add Balance Owner"}
        </button>
        Tez Amount
        <input type="number" id="Counterparty Amount" min="1"></input>
        <button onClick={onAddBalanceCounterparty} className="btn btn-primary btn-lg">
          {loading ? "..." : "Add Balance Counterparty"}
        </button>
        <button onClick={onClaimOwner} className="btn btn-success btn-lg">
          {loading ? "..." : "Claim Balance Owner"}
        </button>
        Hash Secret
        <input type="text" id="Counterparty Hash Secret" min="0"></input>
        <button onClick={onClaimCounterparty} className="btn btn-success btn-lg">
          {loading ? "..." : "Claim Balance Counterparty"}
        </button>
        <div className="py-1">Owner Balance: {balanceowner}</div>
        <div className="py-1">Counterparty Balance: {balancecounterparty}</div>
        <button onClick={onRevertFund} className="btn btn-secondary btn-lg">
          {loading ? "..." : "Revert Funds"}
        </button>
      </div>
    </div>
    
  );
};

export default App;
