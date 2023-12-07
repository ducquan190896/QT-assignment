import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { days } from './Mockdata';
import DayCard from '../components/DayCard';


test('dailyCard to display the detailed daily data', () => {
    const setIsSelectedDayMock = jest.fn();
    render(
        <DayCard day={days[0]} selectedDay={new Date()} setIsSelectedDay={setIsSelectedDayMock} />
    );

    const renderDayCard = screen.getByTestId("daily-card");
  
    expect(renderDayCard).toBeInTheDocument();
});