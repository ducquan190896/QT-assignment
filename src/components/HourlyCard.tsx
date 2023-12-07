import { DailyObj, HourlyObj } from '../store/slices/slice.type'
import { WiHumidity  } from "react-icons/wi";
import { SiRainmeter } from "react-icons/si";
import WindyIcon from './WindyIcon';
import HourlyRange from './HourlyRange';

const HourlyCard = ({hour, day}: {hour: HourlyObj, day: DailyObj}) => {
  return (
    <div className='bg-white w-22 h-[300px] border-x-[1px] border-gray-300 flex flex-col pt-2' data-testid="hourly-card">
        <div className='h-20 mx-auto mb-2'>
          <p className='text-lime-700'>{hour.time.slice(11)}</p>
        </div>
        <HourlyRange hour={hour} day={day}/>
        <div className='flex flex-col px-2 w-full mt-2'>
            <div className='flex flex-row items-center justify-between w-full mb-[1px]'>
                <div className='ml-[2px]'>
                  <SiRainmeter size={15} color="rgb(77 124 15)"/>
                </div>
                <p className='text-sm text-lime-700'>{(hour.precipitation) <10 ? " <10" : hour.precipitation}%</p>
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-[1px]'>
                <WiHumidity size={22} color="rgb(77 124 15)"/>
                <p className='text-sm text-lime-700'>{(hour.relative_humidity_2m) < 10 ? " <10" : hour.relative_humidity_2m}%</p>
            </div>
            <div className='flex flex-row items-center justify-between w-full'>
                <WindyIcon degree={hour.wind_direction_10m} size={25}/>
                <p className='text-[12px] text-lime-700'>{hour.wind_speed_10m.toFixed(0)} m/s</p>
            </div>
        </div>
    </div>
  )
}

export default HourlyCard