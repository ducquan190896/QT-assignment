export type DailyObj = {
    time: Date,
    temperature_2m_max: number,
    temperature_2m_min: number,
    apparent_temperature_max: number,
    apparent_temperature_min: number,
    precipitation_sum: number,
    weathercode: number,
    wind_speed_10m: number,
    wind_direction_10m: number,
    relative_humidity_2m: number
}

export type HourlyObj = {
    time: string,
    hour: string,
    temperature_2m_max: number,
    temperature_2m_min: number,
    apparent_temperature_max: number,
    apparent_temperature_min: number,
    precipitation_sum: number,
    weathercode: number,
    wind_speed_10m: number,
    wind_direction_10m: number,
    relative_humidity_2m: number,
    visibility: number
}