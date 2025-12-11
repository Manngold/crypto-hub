import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { loadMarketCoins } from '../features/market/marketSlice';

const MarketPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { coins, status, error, currency } = useAppSelector(state => state.market);

  useEffect(() => {
    dispatch(loadMarketCoins());
  }, [dispatch]);

  return (
    <div>
      <h1>CryptoHub - Market</h1>
      <p>통화: {currency.toUpperCase()}</p>
      <p>상태: {status}</p>
      {error && <p style={{ color: 'tomato' }}>에러: {error}</p>}

      <p>불러온 코인 개수: {coins.length}</p>

      {/* 임시로 상위 5개만 이름/가격을 보여줌 */}
      <ul>
        {coins.slice(0, 5).map(coin => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol.toUpperCase()}) - {coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketPage;
