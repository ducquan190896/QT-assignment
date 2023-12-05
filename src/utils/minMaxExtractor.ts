import { DailyObj } from "../store/slices/slice.type";

export const minMaxExtractor = (days: DailyObj[]) => {
    if (!days || days.length === 0) {
        // Handle the case when there are no days
        return {
          maxApparentTemperature: 0,
          minApparentTemperature: 0,
        };
      }
    
      return days.reduce((acc, curr) => {
        if (acc.maxApparentTemperature === null || acc.maxApparentTemperature < curr.temperature_2m_max) {
          acc.maxApparentTemperature = curr.temperature_2m_max;
        }
    
        if (acc.minApparentTemperature === null || acc.minApparentTemperature > curr.temperature_2m_min) {
          acc.minApparentTemperature = curr.temperature_2m_min;
        }
    
        return acc;
      }, {
        maxApparentTemperature: days[0].apparent_temperature_max,
        minApparentTemperature: days[0].apparent_temperature_min,
      });
}