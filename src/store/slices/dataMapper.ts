import { DailyObj, HourlyObj, WeatherCode, weatherCodeDescriptions } from "./slice.type";



 const getWeatherCodeDescription = (code: number): WeatherCode | null => {
    return weatherCodeDescriptions.find((weather) => weather.code === code) ?? null;
};

// map raw data from Open API into the array of daily object
export const mapDailyData = (data: any) => {
    const dailyData: DailyObj[] = [];
    for (let index = 0; index < data.daily.time.length; index++) {
      dailyData.push({
        time: data.daily.time[index],
        temperature_2m_max: data.daily.temperature_2m_max[index],
        temperature_2m_min: data.daily.temperature_2m_min[index],
        apparent_temperature_max: data.daily.apparent_temperature_max[index],
        apparent_temperature_min: data.daily.apparent_temperature_min[index],
        precipitation_sum: data.daily.precipitation_sum[index],
        weathercode: getWeatherCodeDescription(data.daily.weathercode[index]),
        wind_speed_10m_max: data.daily.wind_speed_10m_max[index],
        wind_direction_10m_dominant: data.daily.wind_direction_10m_dominant[index],
      });
    }

    // Sort the array by date and time
    dailyData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    return dailyData;
}


// map raw data from Open API into the array of hourly object
export const mapHourlyData = (data: any) => {
  const hoursData: HourlyObj[] = [];

  for (let index = 0; index < data.time.length; index++) {
    const hourlyObj: HourlyObj = {
      time: data.time[index],
      temperature_2m: data.temperature_2m[index],
      apparent_temperature: data.apparent_temperature[index],
      precipitation: data.precipitation[index],
      weathercode: getWeatherCodeDescription(data.weathercode[index]),
      wind_speed_10m: data.wind_speed_10m[index],
      wind_direction_10m: data.wind_direction_10m[index],
      visibility: data.visibility[index],
      relative_humidity_2m: data.relative_humidity_2m[index],
    };
    hoursData.push(hourlyObj);
  }

  // Sort the array by date and time
  hoursData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

  return hoursData;
}