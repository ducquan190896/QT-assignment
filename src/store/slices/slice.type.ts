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
    { code: 0, description: 'Clear sky', icon: 'clear-sky-icon' },
    { code: 1, description: 'Mainly clear', icon: 'mainly-clear-icon' },
    { code: 2, description: 'Partly cloudy', icon: 'partly-cloudy-icon' },
    { code: 3, description: 'Overcast', icon: 'overcast-icon' },
    { code: 45, description: 'Fog and depositing rime fog', icon: 'fog-icon' },
    { code: 48, description: 'Fog and depositing rime fog', icon: 'fog-icon' },
    { code: 51, description: 'Light drizzle', icon: 'drizzle-light-icon' },
    { code: 53, description: 'Moderate drizzle', icon: 'drizzle-moderate-icon' },
    { code: 55, description: 'Dense drizzle', icon: 'drizzle-dense-icon' },
    { code: 56, description: 'Light freezing drizzle', icon: 'freezing-drizzle-light-icon' },
    { code: 57, description: 'Dense freezing drizzle', icon: 'freezing-drizzle-dense-icon' },
    { code: 61, description: 'Slight rain', icon: 'rain-slight-icon' },
    { code: 63, description: 'Moderate rain', icon: 'rain-moderate-icon' },
    { code: 65, description: 'Heavy rain', icon: 'rain-heavy-icon' },
    { code: 66, description: 'Light freezing rain', icon: 'freezing-rain-light-icon' },
    { code: 67, description: 'Heavy freezing rain', icon: 'freezing-rain-heavy-icon' },
    { code: 71, description: 'Slight snowfall', icon: 'snow-fall-slight-icon' },
    { code: 73, description: 'Moderate snowfall', icon: 'snow-fall-moderate-icon' },
    { code: 75, description: 'Heavy snowfall', icon: 'snow-fall-heavy-icon' },
    { code: 77, description: 'Snow grains', icon: 'snow-grains-icon' },
    { code: 80, description: 'Slight rain showers', icon: 'rain-showers-slight-icon' },
    { code: 81, description: 'Moderate rain showers', icon: 'rain-showers-moderate-icon' },
    { code: 82, description: 'Violent rain showers', icon: 'rain-showers-violent-icon' },
    { code: 85, description: 'Slight snow showers', icon: 'snow-showers-slight-icon' },
    { code: 86, description: 'Heavy snow showers', icon: 'snow-showers-heavy-icon' },
    { code: 95, description: 'Slight or moderate thunderstorm', icon: 'thunderstorm-slight-moderate-icon' },
    { code: 96, description: 'Thunderstorm with slight hail', icon: 'thunderstorm-slight-hail-icon' },
    { code: 99, description: 'Thunderstorm with heavy hail', icon: 'thunderstorm-heavy-hail-icon' },
];
  
export enum TemperatureUnit {
    Celsius = 'celsius',
    Fahrenheit = 'fahrenheit',
}

export type TemperatureObj = {
    maxApparentTemperature: number,
    minApparentTemperature: number,
}