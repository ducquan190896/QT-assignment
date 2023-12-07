import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import TemperatureUnitSwitch from '../components/TemperatureUnitSwitch';
import { TemperatureUnit } from '../store/slices/slice.type';

// test('demo2', () => {
//     expect(true).toEqual(true);
// });

test('TemperatureUnitSwitch to select Celcius degree or Faranheiht degree', () => {
    const setTemperatureUnitMock = jest.fn();
  
    render(
      <TemperatureUnitSwitch
        temperatureUnit={TemperatureUnit.Celsius}
        setTemperatureUnit={setTemperatureUnitMock}
      />
    );

    const renderSwitch = screen.getByTestId("temperature-switch");
  
    expect(renderSwitch).toBeInTheDocument();
});