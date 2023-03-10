import { createSlice, PayloadAction } from '@reduxjs/toolkit';

 
export interface FilterState {
  search: string;
  status: 'All' | 'Completed'| 'Doing'
}


const initialState: FilterState = {
    search: '',
    status: 'All'
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    changeFilterStatus(state, action: PayloadAction<'All' | 'Completed'| 'Doing'>) {
        state.status = action.payload
      }
  },
});

export const { changeFilterSearch, changeFilterStatus } = filterSlice.actions;

export default filterSlice.reducer;
