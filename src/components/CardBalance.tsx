import React, { useMemo } from 'react';

const MAX_LIMIT = 1500;

interface CardBalanceProps {
  balance?: number;
}

const CardBalance: React.FC<CardBalanceProps> = ({ balance }) => {
  // If balance is not provided, generate a random one for demo
  const randomBalance = useMemo(() => balance ?? Math.round(Math.random() * 1000 * 100) / 100, [balance]);
  const available = MAX_LIMIT - randomBalance;

  return (
    <div style={{ 
      background: '#ffffff', 
      borderRadius: 16, 
      padding: 20, 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e9ecef',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{ 
        fontSize: 14, 
        color: '#6c757d', 
        marginBottom: 4,
        fontWeight: 500
      }}>Card Balance</div>
      <div style={{ 
        fontSize: 32, 
        fontWeight: 700,
        color: '#212529',
        marginBottom: 4
      }}>${randomBalance.toFixed(2)}</div>
      <div style={{ 
        fontSize: 14, 
        color: '#6c757d'
      }}>${available.toFixed(2)} Available</div>
    </div>
  );
};

export default CardBalance; 