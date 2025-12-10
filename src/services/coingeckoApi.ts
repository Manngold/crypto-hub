import { coingeckoClient } from './coingeckoClient';
import type {
  CoinMarket,
  SortField,
  SortDirection,
  Currency,
} from '../features/market/marketTypes';

export interface FetchMarketCoinsParams {
  vs_currency: Currency;
  page: number;
  per_page: number;
  sortField: SortField;
  sortDirection: SortDirection;
  searchQuery?: string;
}

function mapSortToOrder(field: SortField, direction: SortDirection): string {
  if (field === 'market_cap') {
    return direction === 'asc' ? 'market_cap_asc' : 'market_cap_desc';
  }

  if (field === 'current_price') {
    return direction === 'asc' ? 'current_price_asc' : 'current_price_desc';
  }

  if (field === 'price_change_percentage_24h') {
    return 'market_cap_desc';
  }

  return 'market_cap_desc';
}

export async function fetchMarketCoins(params: FetchMarketCoinsParams): Promise<CoinMarket[]> {
  const { vs_currency, page, per_page, sortField, sortDirection, searchQuery } = params;

  const order = mapSortToOrder(sortField, sortDirection);

  const response = await coingeckoClient.get('/coins/markets', {
    params: {
      vs_currency,
      order,
      per_page,
      page,
      sparkline: false,
      price_change_percentage: '24h',
      // Coingecko에는 공식 searchQuery 파라미터는 없고,
      // /search 엔드포인트가 별도라서 여기서는 일단 전체 마켓을 가져오고
      // 프론트에서 필터링을 할 수도 있다.
    },
  });

  return response.data as CoinMarket[];
}
