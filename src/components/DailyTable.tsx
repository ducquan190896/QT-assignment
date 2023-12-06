import React, {useState} from 'react'
import { DailyObj, TemperatureObj } from '../store/slices/slice.type'
import DayCard from './DayCard'
import { minMaxExtractor } from '../utils/minMaxExtractor'

interface DailyTableProps  {
    days: DailyObj[],
    selectedDay: Date,
    setIsSelectedDay: React.Dispatch<React.SetStateAction<Date>>
}

const DailyTable = ({days, selectedDay, setIsSelectedDay}: DailyTableProps) => {
   const tempObj : TemperatureObj = minMaxExtractor(days);
   console.log(tempObj)
    
  return (
    <div className=' my-8  bg-gray-200 flex flex-row items-end justify-end'>
        {days?.length > 0 && days.map((day: DailyObj, index) => {
            return (
                <DayCard selectedDay={selectedDay} day={day} key={index} setIsSelectedDay={setIsSelectedDay}></DayCard>
            )
        })}
    </div>
  )
}

export default DailyTable