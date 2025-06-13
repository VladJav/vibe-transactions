import React, { useEffect, useState } from 'react';
import type { Transaction } from '../types';
import { formatTransactionDate } from '../utils/dateUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faStore, faCoffee, faShoppingCart, faCar, faCreditCard, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, any> = {
  Apple: faAppleAlt,
  IKEA: faStore,
  Target: faStore,
  Starbucks: faCoffee,
  Amazon: faShoppingCart,
  Uber: faCar,
  Payment: faMoneyBillWave,
  default: faCreditCard,
};

function getRandomDarkColor() {
  const colors = ['#2c3e50', '#8e44ad', '#3498db', '#e67e22', '#27ae60', '#e74c3c', '#34495e', '#f39c12'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const TransactionsList: React.FC<{ onSelect: (tx: Transaction) => void }> = ({ onSelect }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [iconColors, setIconColors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch('/transactions.json')
      .then(res => res.json())
      .then((data: Transaction[]) => {
        setTransactions(data.slice(0, 10));
        // Assign a random color for each transaction id
        const colors: Record<string, string> = {};
        data.slice(0, 10).forEach(tx => {
          colors[tx.id] = getRandomDarkColor();
        });
        setIconColors(colors);
      });
  }, []);

  return (
    <div>
      <h2 style={{ 
        fontWeight: 700, 
        fontSize: 20, 
        margin: '0 0 12px 0',
        color: '#212529'
      }}>Latest Transactions</h2>
      <div style={{
        background: '#ffffff',
        borderRadius: 16,
        padding: "0 20px",
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div>
          {transactions.map(tx => (
          <div
            key={tx.id}
            onClick={() => onSelect(tx)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 20px',
              margin: '0 -20px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={{
              width: 48, 
              height: 48, 
              borderRadius: 12, 
              background: iconColors[tx.id],
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: 16
            }}>
              <FontAwesomeIcon 
                icon={iconMap[tx.name] || iconMap.default} 
                color="#ffffff" 
                size="lg" 
              />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: 4
              }}>
                <span style={{ 
                  fontWeight: 600, 
                  fontSize: 16,
                  color: '#212529'
                }}>{tx.name}</span>
                <span style={{ 
                  color: tx.type === 'Payment' ? '#28a745' : '#212529', 
                  fontWeight: 600, 
                  fontSize: 16 
                }}>
                  {tx.type === 'Payment' ? '+' : ''}${tx.amount.toFixed(2)}
                </span>
              </div>
              <div style={{ 
                fontSize: 14, 
                color: '#6c757d',
                lineHeight: 1.4
              }}>
                {tx.pending && <span style={{ color: '#fd7e14', fontWeight: 500 }}>Pending · </span>}
                {tx.authorizedUser && <span>{tx.authorizedUser} – </span>}
                {tx.description} – {formatTransactionDate(tx.date)}
              </div>
            </div>
            {/* Border line that starts from icon position */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '20px', // Start from where icon starts (container padding)
              right: '20px', // End at container padding
              height: '1px',
              backgroundColor: '#f1f3f4'
            }}></div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsList; 