import moment from "moment";
import { DailyObj, HourlyObj } from "../store/slices/slice.type";

export const filterHoursBySelectedDay = (hours: HourlyObj[], selectedDay : Date, currentTime: Date) => {
    if(hours.length <= 0) {
        return [];
    }
    const filterHours = hours
        .filter((hour: HourlyObj) => {
            const hourDate = new Date(hour.time);
            return hourDate.getDate() == selectedDay.getDate();
        })
        .filter((hour: HourlyObj) => {
            const hourDate = new Date(hour.time);
            if (hourDate.getDate() === currentTime.getDate()) {
                return hourDate.getTime() >= currentTime.getTime();
            } else {
                return true;
            }
    });
    return filterHours;
}

export const filterDayByHourTime = (days: DailyObj[], selectedDay: Date) => {
    const matchingDay = days.find((day) => {
        const dayDate = new Date(day.time);
        return dayDate.getDate() === selectedDay.getDate();
    });
    return matchingDay || null;
}

export const checkPrevOrNextDay = (days : DailyObj[], selectedDay: Date, direction : "prev" | "next") => {
    let chosenDate = direction === "next" ? moment(selectedDay).add(1, 'days').toDate() : moment(selectedDay).subtract(1, 'days').toDate();
    return days.some((day: DailyObj) => {
        const newDate = new Date(day.time);
        return moment(chosenDate).isSame(newDate, 'day');
    });
}