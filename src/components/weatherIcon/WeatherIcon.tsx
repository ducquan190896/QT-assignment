import React from 'react'
import * as ReactIcons from 'react-icons/wi';
import { WeatherCode } from '../../store/slices/slice.type'

interface WeatherIconProps {
    weatherCode: WeatherCode | null, 
    size: number, 
    color: string
}

const WeatherIcon = ({weatherCode, size, color} : WeatherIconProps) => {
    if (!weatherCode ) {
        return <div>weatherCode not found</div>;
    }

    const { icon } = weatherCode;
    const WeatherIconComponent = (ReactIcons as any)[icon];

    if (WeatherIconComponent) {
      return <WeatherIconComponent size={size} color={color} />;
    } else {
      return <div>Icon not found</div>;
    }
}

export default WeatherIcon