import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { DailyObj, HourlyObj } from '../store/slices/slice.type';
import HourlyCard from './HourlyCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { checkPrevOrNextDay, filterDayByHourTime, filterHoursBySelectedDay } from '../utils/HourlyTableUtils';
import moment from 'moment';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



interface HourlyTableProps {
    hours: HourlyObj[],
    days: DailyObj[],
    selectedDay: Date,
    setIsSelectedDay: React.Dispatch<React.SetStateAction<Date>>,
    screenWidth: number
}


const HourlyTable = ({hours, days, selectedDay, setIsSelectedDay, screenWidth}: HourlyTableProps) => {
    const currentTime = new Date();
    const [filterHours, setFilterHours] = useState<HourlyObj[]>([]);
    const [day, setDay] = useState<DailyObj | null>(null);
    const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
    const navigationNextRef = useRef<HTMLButtonElement | null>(null);
   

    useEffect(() => {
        const hoursByDate = filterHoursBySelectedDay(hours, selectedDay, currentTime);
        setFilterHours(hoursByDate);

        const day = filterDayByHourTime(days, selectedDay);
        setDay(day);
        console.log(day);
        
    }, [selectedDay, hours])

    const handleMovingDate = (direction : "prev" | "next") => {
        if(direction === "next") {
            setIsSelectedDay(moment(selectedDay).add(1, 'days').toDate())
        } else {
            setIsSelectedDay(moment(selectedDay).subtract(1, 'days').toDate())
        }
    }

  return (
    <div className='sm:w-[600px] md:w-[600px] lg:w-[1000px]  bg-white relative' >
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={screenWidth < 1000 ? 7 : 10}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
           
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {checkPrevOrNextDay(days, selectedDay, "prev") && (
                <SwiperSlide className='w-40'>
                    <div className='bg-slate-100 w-22 h-[300px] flex items-center justify-center ' >
                        <button className='h-full w-full flex items-center justify-center' onClick={() => handleMovingDate("prev")}>
                            <p className='text-gray-400 hover:text-green-700'>{moment(selectedDay).subtract(1, 'days').format('ddd Do')}</p>
                        </button>
                    </div>
                </SwiperSlide>
            )}
            {filterHours?.length > 0 && day && filterHours.map((hour: HourlyObj, index) => {
                return (
                    <SwiperSlide key={index} className='mx-0'>
                         <HourlyCard key={index} hour={hour} day={day}></HourlyCard>
                    </SwiperSlide>
                )
            })}
            {checkPrevOrNextDay(days, selectedDay, "next") && (
                <SwiperSlide className='w-40'>
                    <div className='bg-slate-100 w-22 h-[300px] flex items-center justify-center'>
                        <button className='h-full w-full flex items-center justify-center' onClick={() => handleMovingDate("next")}>
                            <p className='text-gray-400 hover:text-green-700'>{moment(selectedDay).add(1, 'days').format('ddd Do')}</p>
                        </button>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
        <button ref={navigationPrevRef} className='bg-white w-6 h-14 absolute top-[40%] -left-6 self-center'>
            <IoIosArrowBack size={20}></IoIosArrowBack>
        </button>
        <button ref={navigationNextRef} className='bg-white w-6 h-14 absolute top-[40%] -right-6  self-center'>     
            <IoIosArrowForward size={20}></IoIosArrowForward>        
        </button>
    </div>
  )
}

export default HourlyTable