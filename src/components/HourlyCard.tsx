import { DailyObj, HourlyObj } from '../store/slices/slice.type'
import { WiHumidity  } from "react-icons/wi";
import { SiRainmeter } from "react-icons/si";
import WindyIcon from './WindyIcon';
import HourlyRange from './HourlyRange';

// this card is used to display the detailed data for every hour
const HourlyCard = ({hour, day}: {hour: HourlyObj, day: DailyObj}) => {
  return (
    <div className='bg-white w-22 h-[300px] border-x-[1px] border-gray-300 flex flex-col pt-2' data-testid="hourly-card">
        <div className='h-20 mx-auto mb-2'>
          <p className='text-lime-700'>{hour.time.slice(11)}</p>
        </div>

        {/* the component is used to simulate the increment or decrement of hourly temperature as a column  */}
        <HourlyRange hour={hour} day={day}/>

        <div className='flex flex-col px-2 w-full mt-2 lg:px-4'>
            <div className='flex flex-row items-center justify-between w-full mb-[1px]'>
                <div className='ml-[3px]'>
                  <SiRainmeter size={15} color="rgb(77 124 15)"/>
                </div>
                <p className='text-sm text-lime-700'>{(hour.precipitation) <10 ? " <10" : hour.precipitation}%</p>
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-[1px]'>
                <WiHumidity size={22} color="rgb(77 124 15)"/>
                <p className='text-sm text-lime-700'>{(hour.relative_humidity_2m) < 10 ? " <10" : hour.relative_humidity_2m}%</p>
            </div>
            <div className='flex flex-row items-center justify-between w-full my-[2px]'>
              <div className='ml-[2px]'>
                <WindyIcon degree={hour.wind_direction_10m} size={16}/>
              </div>
              <p className='text-[12px] text-lime-700'>{hour.wind_speed_10m.toFixed(0)} m/s</p>
            </div>
        </div>
    </div>
  )
}

export default HourlyCard