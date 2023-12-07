import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { days } from './Mockdata';
import DailyTable from '../components/DailyTable';


test('DailyTable to display the list of weather data in 7 days', () => {
    const setIsSelectedDayMock = jest.fn();
    render(
        <DailyTable days={days} selectedDay={new Date()} setIsSelectedDay={setIsSelectedDayMock} />
    );

    const renderDailyTable = screen.getByTestId("daily-table");
  
    expect(renderDailyTable).toBeInTheDocument();
});