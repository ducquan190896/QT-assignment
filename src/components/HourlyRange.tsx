import { DailyObj, HourlyObj } from '../store/slices/slice.type'
import WeatherIcon from './WeatherIcon';

// calculate the hourly temperature with the min and max temperature of the selected day to get the exact height in percentage. the aim is to simulate the increment and decrement by the height inside the column.
const heightCalculate = (hour: HourlyObj, day: DailyObj) => {
    const maxTemp = day.temperature_2m_max;
    const minTemp = day.temperature_2m_min;
    const tempDiff = Math.abs(maxTemp - minTemp);
    const heightPercentage = tempDiff === 0 ? 100 : Math.abs(maxTemp - Math.round(hour.temperature_2m)) * 100 / tempDiff;
    return Math.round(heightPercentage);
}

// the component is used to simulate the increment or decrement of hourly temperature as a column 
const HourlyRange = ({hour, day}: {hour: HourlyObj, day: DailyObj}) => {
    const height = heightCalculate(hour, day);

  return (
    <div className='flex-1 flex flex-col items-center pt-2' data-testid="hourly-range">
        <div style={{ height: `${height}%` }} className={`bg-white flex items-end`}>
            <div className='flex flex-col'>
                <div className='mx-auto'>
                    <WeatherIcon size={30} color={"rgb(163 230 53)"} weatherCode={hour.weathercode ?? null}></WeatherIcon>
                </div>
                <p className='text-lime-700 font-bold mx-auto'>{Math.round(hour.temperature_2m)}°</p>
                <p className='text-sm text-gray-400 mx-auto'>Feel {Math.round(hour.apparent_temperature)}°</p>
            </div>
        </div>
        <div className='bg-red-200'></div>
    </div>
  )
}

export default HourlyRange