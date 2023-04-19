
import {tezos} from "./tezos";

export const addBalanceOwnerOperation = async ( depositamount) => {
    try{
        const contract = await tezos.wallet.at("KT1Ah9KakbvEn9DBSB68MG7ygAwRsnm6EXnr");
        const op = await contract.methods.addBalanceOwner().send({
            amount: depositamount,
            mutez: false
        })
        await op.confirmation(1);
    }
    catch(err){
        throw err;
    }
};

export const addBalanceCounterpartyOperation = async (depositamount) => {
  try{
      const contract = await tezos.wallet.at("KT1Ah9KakbvEn9DBSB68MG7ygAwRsnm6EXnr");
      const op = await contract.methods.addBalanceCounterparty().send({
          amount: depositamount,
          mutez: false
      })
      await op.confirmation(1);
  }
  catch(err){
      throw err;
  }
};

export const claimOwnerOperation = async () => {
  try{
      const contract = await tezos.wallet.at("KT1Ah9KakbvEn9DBSB68MG7ygAwRsnm6EXnr");
      const op = await contract.methods.claimOwner().send()
      await op.confirmation(1);
    }
    catch(err){
        throw err;
    }
};

export const claimCounterpartyOperation = async (hashsecret) => {
  try{
    const contract = await tezos.wallet.at("KT1Ah9KakbvEn9DBSB68MG7ygAwRsnm6EXnr");
    const op = await contract.methods.claimCounterparty(hashsecret).send()
    await op.confirmation(1);
  }
  catch(err){
      throw err;
  }
};

export const revertFundOperation = async () => {
  try{
    const contract = await tezos.wallet.at("KT1Ah9KakbvEn9DBSB68MG7ygAwRsnm6EXnr");
    const op = await contract.methods.revertFund().send()
    await op.confirmation(1);
  }
  catch(err){
      throw err;
  }
};