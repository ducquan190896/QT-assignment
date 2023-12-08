import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TemperatureUnit } from '../store/slices/slice.type';

interface SwitchProps {
    temperatureUnit: string,
    setTemperatureUnit: React.Dispatch<React.SetStateAction<string>>
}

// the component is used to switch the temperature unit between Celsius and Fahranheit
const TemperatureUnitSwitch = ({temperatureUnit, setTemperatureUnit} : SwitchProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleOpenBtn = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
      };
    
    const handleCloseBtn = (): void => {
        setOpen(false);
    };

    const changeTemperatureUnit = (temperature: string): void => {
        setTemperatureUnit(temperature);
        setOpen(false);
    };

  return (
    <div className="absolute top-5 right-5 bg-white  rounded-lg" data-testid="temperature-switch">
        <Button
            size="small"
            color="success"
            variant="outlined"
            endIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            onClick={handleOpenBtn}
        >
          {temperatureUnit === TemperatureUnit.Celsius ? "°C" : "°F"}
        </Button>
        <Menu
          open={isOpen}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          anchorEl={anchorEl}
          onClose={handleCloseBtn}
          className='mt-4'
        >
          <MenuItem
            onClick={() => {
                changeTemperatureUnit(TemperatureUnit.Celsius);
            }}
            className='w-14'
          >
            °C
          </MenuItem>
          <MenuItem
            onClick={() => {
                changeTemperatureUnit(TemperatureUnit.Fahrenheit);
            }}
            className='w-14'
          >
            °F
          </MenuItem>
        </Menu>
      </div>
  )
}

export default TemperatureUnitSwitch