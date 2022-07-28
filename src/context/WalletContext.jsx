import React, { useEffect, useState,createContext } from 'react';

export const WalletContext = createContext();
const {ethereum} = window;



export const WalletProvider = ({children}) => {

  const [currentAccount, setcurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {


        if(!ethereum) return alert('Please connect to a metamask wallet');

    const accounts = await ethereum.request({method:'eth_accounts'})

    if(accounts.length){
        setcurrentAccount(accounts[0]);
    }else{
        console.log('no accounts found')
    }

        
    } catch (error) {
        console.log(error);


        throw new error('No ethereum object');
    }  
};


const connectWallet = async () => {
  try {


      if(!ethereum) return alert('Please connect to a metamask wallet');


      const accounts = await ethereum.request({method:'eth_requestAccounts',}) 
      setcurrentAccount(accounts[0]);
      window.location.reload();
  } catch (error) {
      console.log(error);
      // throw new error('No ethereum object');
  }
};

useEffect(() => {
  checkIfWalletIsConnected();
},[])

return(
  <>
  <WalletContext.Provider value={{connectWallet, currentAccount }}>
      {children}
  </WalletContext.Provider>
  </>
)

}