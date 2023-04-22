import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { NFTCard} from './components/nftCard';


import "./index.css";
import { GetEXPBalance, Header } from './components/nftCard';






function MyApp({ Component, pageProps }: AppProps) {
  return (
   
   
<div className="relative h-32 w-128 py-20 min-h-screen gradient-bg-welcome">

<div className="absolute top-0 right-0">
<GetEXPBalance />
</div>
  <div className="absolute inset-x-0 top-0 h-16 text-white flex justify-center mb-1 top-title">Seanies Battle Studio!</div>
  <div className="inset-x-0 top-0 h-16 text-gray-500 flex justify-center mb-1 ">Approve your Dickels in order to level up!</div>
 
 <div className="min-h-screen gradient-bg-welcome">

  <Component {...pageProps} />

  
    </div>
    <div className='relative bottom-0 gradient-bg-welcome'>
  <div className='text-blue-300 md:text-green-300" flex justify-center'>
    
    <ul className='text-lg '>
    <li className='flex justify-center'>Why is my transaction failing/ Why am I getting a JSON rpc error?</li>
    <li className='text-sm flex justify-center '>MetaMask tries to auto calculate gas fees, but isn't great at doing so. Go to advanced settings, turn on "Advanced gas controls
" and when prompted by metamask select "Advanced" and set Priority fee high enough to match the actual network demand</li>
      <li className='flex justify-center'>What is this?</li>
      <li className='text-sm flex justify-center '>This App is to level your Seanies! Get Stats for PVP and PVE content thats still in the works!</li>
      <li className='flex justify-center'>How Does this work?</li>
      <li className='text-sm flex justify-center'>You can spend Dickel tokens to level up your Seanies. Every level costs 1 dickel times current level. So the first one is free!  </li>
      
    </ul>
    
    
      
      
      
        
      
    
    </div>
  </div>
  </div>
  

    
   
    
  );
}

export default MyApp;