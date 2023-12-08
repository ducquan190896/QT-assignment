import React from 'react'
import { DailyObj } from '../store/slices/slice.type'
import DayCard from './DayCard'


interface DailyTableProps  {
    days: DailyObj[],
    selectedDay: Date,
    setIsSelectedDay: React.Dispatch<React.SetStateAction<Date>>,
    screenWidth: number
}

const DailyTable = ({days, selectedDay, setIsSelectedDay, screenWidth}: DailyTableProps) => {

  return (
    <div className='my-8 sm:w-[600px] md:w-[800px] lg:w-[1200px] bg-gray-200 flex flex-row items-end justify-center' data-testid="daily-table">
        {days?.length > 0 && days.map((day: DailyObj, index) => {
            return (
                // map the each Daycard from the data array mapped from data of Open API
                <DayCard selectedDay={selectedDay} day={day} key={index} setIsSelectedDay={setIsSelectedDay} screenWidth={screenWidth}></DayCard>
            )
        })}
    </div>
  )
}

export default DailyTable