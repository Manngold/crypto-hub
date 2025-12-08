import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CoinMarket, SortField, SortDirection, Currency } from './marketTypes';

type LoadStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface MarketState {
  coins: CoinMarket[];
  status: LoadStatus;
  error: string | null;

  page: number;
  perPage: number;

  sortField: SortField;
  sortDirection: SortDirection;

  searchQuery: string;
  currency: Currency;
}

const initialState: MarketState = {
  coins: [],
  status: 'idle',
  error: null,

  page: 1,
  perPage: 50,

  sortField: 'market_cap',
  sortDirection: 'desc',

  searchQuery: '',
  currency: 'usd',
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.page = 1;
    },
    setSort: (state, action: PayloadAction<{ field: SortField; direction: SortDirection }>) => {
      state.sortField = action.payload.field;
      state.sortDirection = action.payload.direction;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
    setCoins: (state, action: PayloadAction<CoinMarket[]>) => {
      state.coins = action.payload;
    },
    setStatus: (state, action: PayloadAction<LoadStatus>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSearchQuery, setSort, setPage, setCurrency, setCoins, setStatus, setError } =
  marketSlice.actions;

export default marketSlice.reducer;
