export type DailyObj = {
    time: string,
    temperature_2m_max: number,
    temperature_2m_min: number,
    apparent_temperature_max: number,
    apparent_temperature_min: number,
    precipitation_sum: number,
    weathercode: WeatherCode | null,
    wind_speed_10m_max: number,
    wind_direction_10m_dominant: number,
}

export type HourlyObj = {
    time: string,
    temperature_2m: number,
    apparent_temperature: number,
    precipitation: number,
    weathercode: WeatherCode | null,
    wind_speed_10m: number,
    wind_direction_10m: number,
    relative_humidity_2m: number,
    visibility: number
}

export type WeatherCode = {
    code : number,
    description: string,
    icon: string
}


export const weatherCodeDescriptions: WeatherCode[] = [
    { code: 0, description: 'Clear sky', icon: 'WiDaySunny' },
    { code: 1, description: 'Mainly clear', icon: 'WiDaySunny' },
    { code: 2, description: 'Partly cloudy', icon: 'WiNightCloudy' },
    { code: 3, description: 'Overcast', icon: 'WiNightCloudy' },
    { code: 45, description: 'Fog and depositing rime fog', icon: 'WiDayFog' },
    { code: 48, description: 'Fog and depositing rime fog', icon: 'WiDayFog' },
    { code: 51, description: 'Light drizzle', icon: 'WiDayRainWind' },
    { code: 53, description: 'Moderate drizzle', icon: 'WiDayRainWind' },
    { code: 55, description: 'Dense drizzle', icon: 'WiNightAltRain' },
    { code: 56, description: 'Light freezing drizzle', icon: 'WiRainWind' },
    { code: 57, description: 'Dense freezing drizzle', icon: 'WiRainWind' },
    { code: 61, description: 'Slight rain', icon: 'WiNightSleet' },
    { code: 63, description: 'Moderate rain', icon: 'WiNightSleet' },
    { code: 65, description: 'Heavy rain', icon: 'WiNightThunderstorm' },
    { code: 66, description: 'Light freezing rain', icon: 'WiRain' },
    { code: 67, description: 'Heavy freezing rain', icon: 'WiRain' },
    { code: 71, description: 'Slight snowfall', icon: 'WiSnow' },
    { code: 73, description: 'Moderate snowfall', icon: 'WiSnow' },
    { code: 75, description: 'Heavy snowfall', icon: 'WiSnowWind' },
    { code: 77, description: 'Snow grains', icon: 'WiNightSnowWind' },
    { code: 80, description: 'Slight rain showers', icon: 'WiDayRainWind' },
    { code: 81, description: 'Moderate rain showers', icon: 'WiDayRainWind' },
    { code: 82, description: 'Violent rain showers', icon: 'WiNightThunderstorm' },
    { code: 85, description: 'Slight snow showers', icon: 'WiNightSnowWind' },
    { code: 86, description: 'Heavy snow showers', icon: 'WiDaySleetStorm' },
    { code: 95, description: 'Slight or moderate thunderstorm', icon: 'thunderstorm-slight-moderate-icon' },
    { code: 96, description: 'Thunderstorm with slight hail', icon: 'WiNightSnowThunderstorm' },
    { code: 99, description: 'Thunderstorm with heavy hail', icon: 'WiNightSnowThunderstorm' },
];
  
export enum TemperatureUnit {
    Celsius = 'celsius',
    Fahrenheit = 'fahrenheit',
}

export type TemperatureObj = {
    maxApparentTemperature: number,
    minApparentTemperature: number,
}

export type HourTemperatureObj = {
    maxTemperature: number,
    minTemperature: number,
}