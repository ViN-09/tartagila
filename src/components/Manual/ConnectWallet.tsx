import React from 'react';

// 1. Definisi Tipe Data untuk Wallet
interface WalletOption {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// 2. Komponen Ikon (SVG) agar tidak perlu install library tambahan
const MetaMaskIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.2 3L17.6 12.3l2.4-5.7L30.2 3z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.8 3l12.5 9.4-2.3-5.8L1.8 3zM25.7 21.9l-3.4 5.2 7.2 2 2.1-7-5.9-.2zM.5 22.1l2.1 7 7.2-2-3.4-5.2-5.9.2z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 14.6l-2 3 7.1.3-.2-7.6L11 14.6zM21 14.6l-5-4.4-.1 7.7 7-.3-1.9-3zM9.7 27.1l4.3-2.1-3.7-2.9-.6 5zM18 25l4.3 2.1-.6-5-3.7 2.9z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.3 27.1L18 25v3.6l.3 2.3 4-3.8zM9.7 27.1l4 3.8.3-2.3V25l-4.3 2.1z" fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.8 20.4l-3.6-1 2.5-1.2 1.1 2.2zM18.2 20.4l1.1-2.2 2.5 1.2-3.6 1z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.7 27.1l.7-5.2-4.1.2 3.4 5zM21.6 21.9l.7 5.2 3.4-5-4.1-.2zM24.3 17.6l-7 .3.6 3.5 1.1-2.2 2.5 1.2 2.8-2.8zM10.2 20.4l2.5-1.2 1.1 2.2.6-3.5-7-.3 2.8 2.8z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.4 17.6l3 5.8-.1-2.8-2.9-3zM21.7 20.6l-.1 2.8 3-5.8-2.9 3zM16.1 17.9l-.6 3.5.7 3.6.1-4.9-.2-2.2zM14.9 17.9l-.2 2.2.1 4.9.7-3.6-.6-3.5z" fill="#E4751F" stroke="#E4751F" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CoinbaseIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#0052FF"/>
    <path d="M16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22ZM16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="white"/>
    <circle cx="16" cy="16" r="3" fill="white"/>
  </svg>
);

const WalletConnectIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#3396FF"/>
    <path d="M9.5 13.5C13.0899 10.2239 18.9101 10.2239 22.5 13.5L23.5 14.4C23.8 14.7 23.8 15.2 23.5 15.5L22.2 16.7C22 16.9 21.7 16.9 21.5 16.7L20.1 15.4C17.8 13.3 14.2 13.3 11.9 15.4L10.4 16.7C10.2 16.9 9.9 16.9 9.7 16.7L8.5 15.5C8.2 15.2 8.2 14.7 8.5 14.4L9.5 13.5ZM24.8 16.9L26.7 18.6C27 18.9 27 19.4 26.7 19.7L19.5 26.2C19.2 26.4 18.8 26.4 18.5 26.2L14 22.1C13.9 22 13.7 22 13.6 22.1L9.1 26.2C8.8 26.4 8.4 26.4 8.1 26.2L0.9 19.7C0.6 19.4 0.6 18.9 0.9 18.6L2.8 16.9C3.1 16.6 3.5 16.6 3.8 16.9L8.3 21C8.4 21.1 8.6 21.1 8.7 21L13.2 16.9C13.5 16.7 13.9 16.7 14.2 16.9L18.7 21C18.8 21.1 19 21.1 19.1 21L23.6 16.9C24.1 16.6 24.5 16.6 24.8 16.9Z" fill="white" transform="scale(0.8) translate(4,4)"/>
  </svg>
);

// 3. Data Wallet
const WALLETS: WalletOption[] = [
  { id: 'metamask', name: 'MetaMask', icon: <MetaMaskIcon /> },
  { id: 'coinbase', name: 'Coinbase Wallet', icon: <CoinbaseIcon /> },
  { id: 'walletconnect', name: 'WalletConnect', icon: <WalletConnectIcon /> },
];

// 4. Komponen Utama
interface ConnectWalletProps {
  isOpen?: boolean;
  onClose?: () => void;
  onConnect?: (walletId: string) => void;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ 
  isOpen = true, 
  onClose,
  onConnect 
}) => {
  if (!isOpen) return null;

  return (
    // Overlay Background (Opsional, agar modal terlihat melayang)
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
      
      {/* Card Container */}
      <div className="bg-white w-[360px] rounded-3xl shadow-xl overflow-hidden font-sans border border-gray-100">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 pb-2">
          <h2 className="text-lg font-bold text-gray-900 pl-2">Connect a Wallet</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* List Wallet */}
        <div className="px-5 pb-5 pt-2">
          <p className="text-sm font-semibold text-gray-400 mb-3 ml-1">Popular</p>
          
          <div className="flex flex-col gap-1">
            {WALLETS.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => onConnect && onConnect(wallet.id)}
                className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group"
              >
                <div className="flex-shrink-0">
                  {wallet.icon}
                </div>
                <span className="font-bold text-gray-800 group-hover:text-black">
                  {wallet.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-5 border-t border-gray-100 flex items-center justify-between text-sm">
          <span className="text-gray-400 font-medium">New to Ethereum wallets?</span>
          <a href="#" className="font-bold text-red-700 hover:text-red-800 hover:underline">
            Learn More
          </a>
        </div>

      </div>
    </div>
  );
};