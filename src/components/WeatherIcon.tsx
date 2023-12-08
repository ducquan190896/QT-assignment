import * as ReactIcons from 'react-icons/wi';
import { WeatherCode } from '../store/slices/slice.type'
import { TiCancel } from "react-icons/ti";

interface WeatherIconProps {
    weatherCode: WeatherCode | null, 
    size: number, 
    color: string
}

// the component is used to display the weather code by its correspondent icon and
const WeatherIcon = ({weatherCode, size, color} : WeatherIconProps) => {
    if (!weatherCode ) {
        return <TiCancel size={size} color={color}/>;
    }

    const { icon } = weatherCode;
    const WeatherIconComponent = (ReactIcons as any)[icon];

    if (WeatherIconComponent) {
      return <WeatherIconComponent data-testid="weather-icon" size={size} color={color} />;
    } else {
      return <TiCancel size={size} color={color}/>
    }
}

export default WeatherIcon