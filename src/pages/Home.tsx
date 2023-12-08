import {useCallback, useEffect, useState} from 'react'
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
  const { days, hours} = useAppSelector(weatherSelector);
  const [temperatureUnit, setTemperatureUnit] = useState<string>(TemperatureUnit.Celsius);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

    // update the size of window inner height
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // fetch data from Open API for hours and days
  const loadDataFromOpenAPI = useCallback(async () => {
    console.log(isRefreshing);
    console.log(isLoading);
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

      {/* the dropdown menu for changing temperature unit (celsius or fahranheit) */}
      <TemperatureUnitSwitch temperatureUnit={temperatureUnit} setTemperatureUnit={setTemperatureUnit}></TemperatureUnitSwitch>

      {/* the table displays the daily data in 7 days */}
      {days?.length > 0 && (
        <DailyTable selectedDay={isSelectedDay} days={days} setIsSelectedDay={setIsSelectedDay} screenWidth={screenWidth}></DailyTable>
      )}

       {/* the table allows to swipe hourly data within a day */}
      {hours?.length > 0 && (
        <HourlyTable selectedDay={isSelectedDay} hours={hours} days={days} setIsSelectedDay={setIsSelectedDay} screenWidth={screenWidth}></HourlyTable>
      )}
    </div>
  )
}

export default Home