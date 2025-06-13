import React from 'react';

const NoPaymentDue: React.FC = () => {
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });
  
  return (
    <div style={{ 
      background: '#ffffff', 
      borderRadius: 16, 
      padding: 20, 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e9ecef',
      height: '100%',
      minHeight: '180px'
    }}>
      <div>
        <div style={{ 
          fontSize: 14, 
          color: '#6c757d', 
          marginBottom: 4,
          fontWeight: 500
        }}>No Payment Due</div>
        <div style={{ 
          fontSize: 16, 
          color: '#212529',
          fontWeight: 400,
          lineHeight: 1.4
        }}>You've paid your<br/>{currentMonth} balance.</div>
      </div>
      <div style={{ 
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: '#e9ecef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        color: '#000000',
        alignSelf: 'flex-end'
      }}>✓</div>
    </div>
  );
};

export default NoPaymentDue; 