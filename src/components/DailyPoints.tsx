import React from 'react';
import { getDayOfSeason, calculateDailyPoints, formatPoints } from '../utils/pointsUtils';

const DailyPoints: React.FC = () => {
  const today = new Date();
  const dayOfSeason = getDayOfSeason(today);
  const points = calculateDailyPoints(dayOfSeason);
  const formatted = formatPoints(points);

  return (
    <div style={{ 
      background: '#ffffff', 
      borderRadius: 16, 
      padding: 20, 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ 
        fontSize: 14, 
        color: '#6c757d', 
        marginBottom: 4,
        fontWeight: 500
      }}>Daily Points</div>
      <div style={{ 
        fontSize: 32, 
        fontWeight: 700,
        color: '#212529'
      }}>{formatted}</div>
    </div>
  );
};

export default DailyPoints; 