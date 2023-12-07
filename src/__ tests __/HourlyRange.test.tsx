import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import HourlyRange from '../components/HourlyRange';
import { days, hours } from './Mockdata';




test('HourlyRange to display the hourly temperature between max and min within a day', () => {
  
    render(
      <HourlyRange day={days[0]} hour={hours[0]}></HourlyRange>
    );

    const renderHourlyRange = screen.getByTestId("hourly-range");
  
    expect(renderHourlyRange).toBeInTheDocument();
});