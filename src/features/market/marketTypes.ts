export interface CoinMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

export type SortField = 'market_cap' | 'current_price' | 'price_change_percentage_24h';
export type SortDirection = 'asc' | 'desc';
export type Currency = 'usd' | 'eur' | 'krw';
