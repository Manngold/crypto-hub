import React from 'react';
import { useAppSelector } from '../app/hooks';

const MarketPage: React.FC = () => {
  const { coins, status, searchQuery } = useAppSelector(state => state.market);

  return (
    <div>
      <h1>CryptoHub - Market</h1>
      <p>현재 상태: {status}</p>
      <p>검색어: {searchQuery || '없음'}</p>
      <p>코인 개수: {coins.length}</p>
    </div>
  );
};

export default MarketPage;
