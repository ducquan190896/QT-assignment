import React from 'react'
import { DailyObj } from '../store/slices/slice.type'
import moment from 'moment'
import WeatherIcon from './WeatherIcon';

interface DayCardProp {
    day: DailyObj,
    selectedDay: Date,
    setIsSelectedDay: React.Dispatch<React.SetStateAction<Date>>,
    screenWidth: number
}

const today = new Date();

const DayCard = ({day, selectedDay, setIsSelectedDay, screenWidth}: DayCardProp) => {
    const isToday = moment(day.time).isSame(today, 'day');
    const isSelectedDay = moment(day.time).isSame(selectedDay, 'day');
 
    const handleClick = () => {
      setIsSelectedDay(new Date(day.time));
    }

  return (
    <div style={{height: isSelectedDay ? 190 : 120, width: isSelectedDay ? "33.3%" : "12.5%"}} className={`flex flex-col items-start justify-start md:justify-center md:items-center sm:justify-center sm:items-center bg-white md:px-0 px-2  py-2  border-gray-300 border-x-[1px]`} onClick={handleClick} data-testid="daily-card">
        <p className={`text-lime-700 font-bold ${isSelectedDay ? "lg:text-lg md:text-base sm:text-base" : "lg:text-lg  sm:text-xs mx-auto"}`}>
          {isToday ? "Today" :  moment(day.time).format('ddd Do')}
        </p>
        
        {isSelectedDay ? (
          <div className='flex flex-row mt-8 mx-auto items-center justify-center px-2'>
            <div className='mt-2 mx-auto'>
              <WeatherIcon size={screenWidth < 1000 ? 38 : 70} color={"rgb(163 230 53)"} weatherCode={day.weathercode ?? null}></WeatherIcon>
            </div>
            <div className='flex flex-col items-center justify-center pr-4 sm:pr-[2px] md:pr-2 lg:pr-4 mr-4 md:mr-2 sm:mr-2 border-r-[1px] border-gray-400'>
              <p className='text-lime-700 md:text-2xl lg:text-2xl font-bold mb-6'>{day.temperature_2m_max.toFixed(0)}°</p>
              <p className='text-lime-700 md:text-2xl lg:text-2xl'>{day.temperature_2m_min.toFixed(0)}°</p>
            </div>
            <div className='flex-1 mx-auto'>
              <p className='text-lime-700  md:text-base lg:text-lg'>{day.weathercode?.description}</p>
            </div>
          </div>
          ) : (
          <div className='flex flex-row items-start justify-between sm:items-center sm:justify-evenly mt-2 '>
            <div className='mt-2'>
              <WeatherIcon size={screenWidth < 1000 ? 28 : 44} color={"rgb(163 230 53)"} weatherCode={day.weathercode ?? null}></WeatherIcon>
            </div>
            <div className='flex flex-col items-center justify-center ml-2 md:ml-0'>
              <p className='text-lime-700  md:text-sm lg:text-lg font-bold'>{day.temperature_2m_max.toFixed(0)}°</p>
              <p className='text-lime-700  md:text-sm lg:text-lg'>{day.temperature_2m_min.toFixed(0)}°</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default DayCard