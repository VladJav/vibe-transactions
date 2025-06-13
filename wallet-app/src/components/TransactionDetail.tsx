import React from 'react';
import type { Transaction } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faStore, faCoffee, faShoppingCart, faCar, faCreditCard, faMoneyBillWave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { formatTransactionDate } from '../utils/dateUtils';

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

const TransactionDetail: React.FC<{ transaction: Transaction; onBack: () => void }> = ({ transaction, onBack }) => {
  const iconColor = getRandomDarkColor();
  
  return (
    <div style={{
      background: '#f2f2f7',
      minHeight: '100vh',
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      {/* Header */}
      <div style={{
        background: '#f2f2f7',
        padding: '60px 20px 40px 20px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <button 
          onClick={onBack} 
          style={{ 
            position: 'absolute',
            left: 20,
            top: 20,
            background: 'none', 
            border: 'none', 
            color: '#007aff', 
            fontSize: 18, 
            cursor: 'pointer',
            padding: 0
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        
        {/* Icon */}
        <div style={{ 
          width: 80, 
          height: 80, 
          borderRadius: 20, 
          background: iconColor, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 30px auto'
        }}>
          <FontAwesomeIcon 
            icon={iconMap[transaction.name] || iconMap.default} 
            color="#ffffff" 
            size="2x" 
          />
        </div>
        
        {/* Amount */}
        <div style={{ 
          fontSize: 48, 
          fontWeight: 700,
          color: '#000000',
          marginBottom: 16
        }}>
          {transaction.type === 'Payment' ? '+' : ''}${transaction.amount.toFixed(2)}
        </div>
        
        {/* Merchant Name */}
        <div style={{ 
          fontSize: 18,
          color: '#000000',
          fontWeight: 400,
          marginBottom: 8
        }}>{transaction.name}</div>
        
        {/* Date */}
        <div style={{ 
          fontSize: 16,
          color: '#8e8e93'
        }}>{formatTransactionDate(transaction.date)}</div>
      </div>
      
      {/* Status Section */}
      <div style={{
        background: '#ffffff',
        margin: '0 16px 16px 16px',
        padding: '16px 20px',
        borderRadius: 12
      }}>
        <div style={{ 
          fontSize: 17,
          color: '#000000',
          fontWeight: 400,
          marginBottom: 4
        }}>Status: {transaction.pending ? 'Pending' : 'Approved'}</div>
        <div style={{ 
          fontSize: 17,
          color: '#8e8e93',
          fontWeight: 400
        }}>RBC Bank Debit Card</div>
      </div>
      
      {/* Total Section */}
      <div style={{
        background: '#ffffff',
        margin: '0 16px',
        padding: '16px 20px',
        borderRadius: 12
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ 
            fontSize: 17,
            color: '#000000',
            fontWeight: 400
          }}>Total</span>
          <span style={{ 
            fontSize: 17,
            color: '#000000',
            fontWeight: 600
          }}>${transaction.amount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail; 