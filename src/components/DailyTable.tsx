import React from 'react'
import { DailyObj } from '../store/slices/slice.type'
import DayCard from './DayCard'


interface DailyTableProps  {
    days: DailyObj[],
    selectedDay: Date,
    setIsSelectedDay: React.Dispatch<React.SetStateAction<Date>>
}

const DailyTable = ({days, selectedDay, setIsSelectedDay}: DailyTableProps) => {
    
  return (
    <div className=' my-8 w-2/3 bg-gray-200 flex flex-row items-end ' data-testid="daily-table">
        {days?.length > 0 && days.map((day: DailyObj, index) => {
            return (
                <DayCard selectedDay={selectedDay} day={day} key={index} setIsSelectedDay={setIsSelectedDay}></DayCard>
            )
        })}
    </div>
  )
}

export default DailyTable