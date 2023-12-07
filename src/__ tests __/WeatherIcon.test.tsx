import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import WeatherIcon from '../components/WeatherIcon';

const weatherCode = { code: 0, description: 'Clear sky', icon: 'WiDaySunny' };


test('WeatherIcon component renders the icon', () => {
    render(<WeatherIcon weatherCode={weatherCode} size={24} color="blue" />);
  
    const renderedIcon = screen.getByTestId('weather-icon');
  
    expect(renderedIcon).toBeInTheDocument();
    expect(renderedIcon).toHaveAttribute('color', 'blue');
    expect(renderedIcon).toHaveStyle({ fontSize: 24 });
  
});