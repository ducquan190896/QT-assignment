import '@testing-library/jest-dom'
import WindyIcon from '../components/WindyIcon';
import { render, screen } from '@testing-library/react';

test('demo2', () => {
    expect(true).toEqual(true);
});


test('WindyIcon component renders the icon', () => {
    render(<WindyIcon degree={140} size={20}></WindyIcon>);
  
    const renderedIcon = screen.getByTestId("wind-icon");
  
    expect(renderedIcon).toBeInTheDocument();
    expect(renderedIcon).toHaveStyle({ fontSize: 24 });
  
});