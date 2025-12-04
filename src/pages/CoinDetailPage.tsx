import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <div>CoinDetailPage</div>;
};

export default CoinDetailPage;
