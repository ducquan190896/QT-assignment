import React, {useCallback, useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchDailyData, fetchHourlyData, weatherSelector } from '../store/slices/weatherSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {TemperatureUnit } from '../store/slices/slice.type';
import DailyTable from '../components/DailyTable';
import TemperatureUnitSwitch from '../components/TemperatureUnitSwitch';
import HourlyTable from '../components/HourlyTable';


const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSelectedDay, setIsSelectedDay] = useState<Date>(new Date());
  const dispatch = useAppDispatch();
  const { days, hours, error, hourlyStatus, dailyStatus} = useAppSelector(weatherSelector);
  const [temperatureUnit, setTemperatureUnit] = useState<string>(TemperatureUnit.Celsius);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount
  

  const loadDataFromOpenAPI = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(fetchDailyData({temperatureUnit: temperatureUnit}));
    await dispatch(fetchHourlyData({temperatureUnit: temperatureUnit}));
    setIsRefreshing(false);
  }, [temperatureUnit])

  useEffect(() => {
    setIsLoading(true);
    loadDataFromOpenAPI().then(() => setIsLoading(false));
  }, [temperatureUnit])

  return (
    <div className='bg-gray-200 sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden w-screen h-screen  flex flex-col items-center justify-center mx-0 my-0'>
      <TemperatureUnitSwitch temperatureUnit={temperatureUnit} setTemperatureUnit={setTemperatureUnit}></TemperatureUnitSwitch>
      {days?.length > 0 && (
        <DailyTable selectedDay={isSelectedDay} days={days} setIsSelectedDay={setIsSelectedDay} screenWidth={screenWidth}></DailyTable>
      )}
      {hours?.length > 0 && (
        <HourlyTable selectedDay={isSelectedDay} hours={hours} days={days} setIsSelectedDay={setIsSelectedDay} screenWidth={screenWidth}></HourlyTable>
      )}
    </div>

  )
}

export default Home