import React, { useEffect, useState } from 'react'
import { DailyObj, HourlyObj } from '../store/slices/slice.type'
import WeatherIcon from './weatherIcon/WeatherIcon';

const heightCalculate = (hour: HourlyObj, day: DailyObj) => {
    const maxTemp = day.temperature_2m_max;
    const minTemp = day.temperature_2m_min;
    const tempDiff = Math.abs(maxTemp - minTemp);
    const heightPercentage = tempDiff === 0 ? 100 : Math.abs(maxTemp - Math.round(hour.temperature_2m)) * 100 / tempDiff;
    return Math.round(heightPercentage);
}

const HourlyRange = ({hour, day}: {hour: HourlyObj, day: DailyObj}) => {
    const height = heightCalculate(hour, day);

  return (
    <div className='flex-1 flex flex-col items-center pt-2'>
        <div style={{ height: `${height}%` }} className={`bg-white flex items-end`}>
            <div className='flex flex-col'>
                <div className='mx-auto'>
                    <WeatherIcon size={30} color={"rgb(107 114 128)"} weatherCode={hour.weathercode ?? null}></WeatherIcon>
                </div>
                <p className='font-bold mx-auto'>{Math.round(hour.temperature_2m)}°</p>
                <p className='text-sm text-gray-400 mx-auto'>Feel {Math.round(hour.apparent_temperature)}°</p>
            </div>
        </div>
        <div className='bg-red-200'></div>
    </div>
  )
}

export default HourlyRange