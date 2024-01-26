import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@reduxjs/toolkit/query';

export interface ICredit {
  id: number;
  name: string;
  value: number;
}

interface CreditState {
  credit: ICredit | null;
}

const initialState: CreditState = {
  credit: null,
};

export const creditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    setCredit: (state, action: PayloadAction<ICredit>) => {
      state.credit = action.payload;
    },
    clearCredit: (state) => {
      state.credit = null;
    },
  }
});

export const { setCredit, clearCredit } = creditSlice.actions;
export const creditReducer = creditSlice.reducer;
// export const creditSelector = (state: RootState) => state.

