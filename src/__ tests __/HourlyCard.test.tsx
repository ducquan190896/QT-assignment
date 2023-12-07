import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { days, hours } from './Mockdata';
import HourlyCard from '../components/HourlyCard';




test('HourlyCard to display the detailed hourly data', () => {
  
    render(
      <HourlyCard day={days[0]} hour={hours[0]}></HourlyCard>
    );

    const renderHourlyCard = screen.getByTestId("hourly-card");
  
    expect(renderHourlyCard).toBeInTheDocument();
});