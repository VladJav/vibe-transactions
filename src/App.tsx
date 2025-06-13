import React, { useState } from 'react';
import CardBalance from './components/CardBalance';
import NoPaymentDue from './components/NoPaymentDue';
import DailyPoints from './components/DailyPoints';
import TransactionsList from './components/TransactionsList';
import TransactionDetail from './components/TransactionDetail';
import type { Transaction } from './types';

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  return (
    <>
      {!selectedTransaction ? (
        <div style={{ 
          maxWidth: 428, 
          margin: '0 auto', 
          background: '#f8f9fa', 
          minHeight: '100vh', 
          padding: 20,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <CardBalance />
              <DailyPoints />
            </div>
            <div style={{ flex: 1 }}>
              <NoPaymentDue />
            </div>
          </div>
          <TransactionsList onSelect={setSelectedTransaction} />
        </div>
      ) : (
        <TransactionDetail transaction={selectedTransaction} onBack={() => setSelectedTransaction(null)} />
      )}
    </>
  );
}

export default App;