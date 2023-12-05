import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DailyObj, HourlyObj } from './slice.type';

interface CounterState {
  days: DailyObj[] | [],
  hours: HourlyObj[] | []
}

const initialState: CounterState = {
  days: [],
  hours: []
};

const weatherSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getDailyData: (state) => {
      
    },
    getHourlyData: (state) => {
     
    },
  },
});

export const { getDailyData, getHourlyData } = weatherSlice.actions;


export default weatherSlice.reducer;