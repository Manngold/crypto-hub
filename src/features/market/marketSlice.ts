import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { CoinMarket, SortField, SortDirection, Currency } from './marketTypes';
import { fetchMarketCoins } from '../../services/coingeckoApi';

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

export const loadMarketCoins = createAsyncThunk<
  CoinMarket[],
  void,
  { state: RootState; rejectValue: string }
>('market/loadMarketCoins', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const { currency, page, perPage, sortField, sortDirection } = state.market;

    const coins = await fetchMarketCoins({
      vs_currency: currency,
      page,
      per_page: perPage,
      sortField,
      sortDirection,
    });

    return coins;
  } catch (error) {
    return rejectWithValue('마켓 데이터를 불러오는 중 문제가 발생했습니다.');
  }
});

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
  extraReducers: builder => {
    builder
      .addCase(loadMarketCoins.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadMarketCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = action.payload;
      })
      .addCase(loadMarketCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.payload ?? action.error.message ?? '마켓 데이터를 불러오지 못했습니다.';
      });
  },
});

export const { setSearchQuery, setSort, setPage, setCurrency, setCoins, setStatus, setError } =
  marketSlice.actions;

export default marketSlice.reducer;
