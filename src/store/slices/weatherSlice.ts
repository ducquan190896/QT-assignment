// import { createSlice, createAsyncThunk, PayloadAction   } from '@reduxjs/toolkit';
// import { DailyObj, HourlyObj } from './slice.type';
// import axios from 'axios';

// interface CounterState {
//   days: DailyObj[] | [],
//   hours: HourlyObj[] | [],
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: CounterState = {
//   days: [],
//   hours: [],
//   status: 'idle',
//   error: null,
// };


// interface FetchDailyDataPayload {
//   data: any; 
// }

//  // get daily data from OpenAPI
// export const fetchDailyData = createAsyncThunk<FetchDailyDataPayload, void, { rejectValue: string }>(
//   'weather/fetchDailyData',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=65.0124&longitude=25.4682&timezone=Europe/Helsinki&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,rain_sum,weathercode`);
//       console.log(response.data);
//       return { data: response.data }; 
//     } catch (error) {
//       return rejectWithValue('Failed to fetch daily data');
//     }
//   }
// );

// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDailyData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchDailyData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.days = action.payload.data;
//       })
//       .addCase(fetchDailyData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = "failed";
//       });
//   }
// });


// export default weatherSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DailyObj, HourlyObj } from './slice.type';
import { RootState } from '../store';
import { BASE_URL } from './constant';
import { mapDailyData, mapHourlyData } from './dataMapper';

interface WeatherState {
  days: DailyObj[] | [];
  hours: HourlyObj[] | [];
  dailyStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  hourlyStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WeatherState = {
  days: [],
  hours: [],
  dailyStatus: 'idle',
  hourlyStatus: 'idle',
  error: null,
};

interface FetchDailyDataPayload {
  data: DailyObj[];
}

interface FetchHourlyDataPayload {
  data: HourlyObj[];
}

export const fetchDailyData = createAsyncThunk<FetchDailyDataPayload, { temperatureUnit: string }, { rejectValue: string }>(
  'weather/fetchDailyData',
  async ({temperatureUnit}, { rejectWithValue }) => {
    console.log(temperatureUnit)
    try {
      const response = await axios.get(BASE_URL + '&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,weathercode,wind_speed_10m_max,wind_direction_10m_dominant' + "&temperature_unit=" + temperatureUnit);
      const rawData = response.data;
      const formattedData = mapDailyData(rawData);
      console.log(formattedData)
      return { data: formattedData };
    } catch (error) {
      return rejectWithValue('Failed to daily data');
    }
  }
);

export const fetchHourlyData = createAsyncThunk<FetchHourlyDataPayload, { temperatureUnit: string }, { rejectValue: string }>(
  'weather/fetchHourlyData',
  async ({temperatureUnit}, { rejectWithValue }) => {
    console.log(temperatureUnit)
    try {
      const response = await axios.get(BASE_URL + '&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,wind_speed_10m,wind_direction_10m,visibility,relative_humidity_2m' + "&temperature_unit=" + temperatureUnit);
      const rawData = response.data;
      const formattedData = mapHourlyData(rawData.hourly);
      console.log(formattedData.length > 0 ? "has data": "no data")
      return { data: formattedData };
    } catch (error) {
      return rejectWithValue('Failed to hourly data');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Daily data reducer
      .addCase(fetchDailyData.pending, (state) => {
        state.dailyStatus = 'loading';
      })
      .addCase(fetchDailyData.fulfilled, (state, action) => {
        state.dailyStatus = 'succeeded';
        state.days = action.payload.data;
      })
      .addCase(fetchDailyData.rejected, (state, action) => {
        state.dailyStatus = 'failed';
        state.error = action.payload || 'Failed to fetch daily data';
      })
      // Hourly data reducers
       .addCase(fetchHourlyData.pending, (state) => {
        state.hourlyStatus = 'loading';
      })
      .addCase(fetchHourlyData.fulfilled, (state, action) => {
        state.hourlyStatus = 'succeeded';
        console.log(action.payload.data)
        state.hours = action.payload.data;
      })
      .addCase(fetchHourlyData.rejected, (state, action) => {
        state.hourlyStatus = 'failed';
        state.error = action.payload || 'Failed to fetch hourly data';
      });
      ;
  },
});
export const weatherSelector = (state: RootState) => state.weather;
export default weatherSlice.reducer;