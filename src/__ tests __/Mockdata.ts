import { DailyObj, HourlyObj, WeatherCode } from "../store/slices/slice.type";

export const weatherCode : WeatherCode = {
    code: 1,
    description: 'Clear sky',
    icon: 'WiDaySunny',
}

export const days: DailyObj[] = [
    {
      time: '2023-12-12',
      temperature_2m_max: 25,
      temperature_2m_min: 15,
      apparent_temperature_max: 26,
      apparent_temperature_min: 16,
      precipitation_sum: 5,
      weathercode: weatherCode,
      wind_speed_10m_max: 10,
      wind_direction_10m_dominant: 180,
    },
    {
      time: '2023-12-13',
      temperature_2m_max: 28,
      temperature_2m_min: 18,
      apparent_temperature_max: 29,
      apparent_temperature_min: 19,
      precipitation_sum: 8,
      weathercode: weatherCode,
      wind_speed_10m_max: 12,
      wind_direction_10m_dominant: 200,
    },
  ];
  
export  const hours: HourlyObj[] = [
    {
      time: '2023-12-12T12:00:00',
      temperature_2m: 20,
      apparent_temperature: 21,
      precipitation: 2,
      weathercode: weatherCode,
      wind_speed_10m: 5,
      wind_direction_10m: 270,
      relative_humidity_2m: 50,
      visibility: 10,
    },
    {
      time: '2023-12-12T15:00:00',
      temperature_2m: 22,
      apparent_temperature: 23,
      precipitation: 0,
      weathercode: weatherCode,
      wind_speed_10m: 8,
      wind_direction_10m: 300,
      relative_humidity_2m: 45,
      visibility: 12,
    },
    {
      time: '2023-12-13T18:00:00',
      temperature_2m: 23,
      apparent_temperature: 24,
      precipitation: 1,
      weathercode: weatherCode,
      wind_speed_10m: 6,
      wind_direction_10m: 240,
      relative_humidity_2m: 55,
      visibility: 8,
    },
    {
      time: '2023-12-13T21:00:00',
      temperature_2m: 26,
      apparent_temperature: 22,
      precipitation: 3,
      weathercode: weatherCode,
      wind_speed_10m: 7,
      wind_direction_10m: 180,
      relative_humidity_2m: 60,
      visibility: 7,
    },
  ];