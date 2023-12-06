import React, {useCallback, useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchDailyData, fetchHourlyData, weatherSelector } from '../store/slices/weatherSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {TemperatureUnit } from '../store/slices/slice.type';
import DailyTable from '../components/DailyTable';
import TemperatureUnitSwitch from '../components/TemperatureUnitSwitch';




const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSelectedDay, setIsSelectedDay] = useState<Date>(new Date());
  const dispatch = useAppDispatch();
  const { days, hours, error, hourlyStatus} = useAppSelector(weatherSelector);
  const [temperatureUnit, setTemperatureUnit] = useState<string>(TemperatureUnit.Celsius);

  const loadDataFromOpenAPI = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(fetchDailyData({temperatureUnit: temperatureUnit}));
         // await dispatch(fetchHourlyData({temperatureUnit: temperatureUnit}));
    setIsRefreshing(false);
  }, [temperatureUnit])

  useEffect(() => {
    setIsLoading(true);
    loadDataFromOpenAPI().then(() => setIsLoading(false));
  }, [temperatureUnit])

  return (
    <div className='bg-gray-200 w-screen h-screen flex flex-col items-center justify-center mx-0 my-0'>
      <TemperatureUnitSwitch temperatureUnit={temperatureUnit} setTemperatureUnit={setTemperatureUnit}></TemperatureUnitSwitch>
      <DailyTable selectedDay={isSelectedDay} days={days} setIsSelectedDay={setIsSelectedDay}></DailyTable>
    </div>

  )
}

export default Home