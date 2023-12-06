import React from 'react'
import * as ReactIcons from 'react-icons/wi';

const WindyIcon = ({degree, size}: {degree: number, size: number}) => {
    const directions = [
        { min: 157.5, max: 202.5, icon: 'WiDirectionUp' },
        { min: 202.5, max: 247.5, icon: 'WiDirectionUpRight' },
        { min: 247.5, max: 292.5, icon: 'WiDirectionRight' },
        { min: 292.5, max: 337.5, icon: 'WiDirectionDownRight' },
        { min: 337.5, max: 22.5, icon: 'WiDirectionDown' },
        { min: 22.5, max: 67.5, icon: 'WiDirectionDownLeft' },
        { min: 67.5, max: 112.5, icon: 'WiDirectionLeft' },
        { min: 112.5, max: 157.5, icon: 'WiDirectionUpLeft' },
    ];
    
    const getWindDirectionIcon = () => {
        const direction = directions.find(
          (dir) => degree >= dir.min && degree < dir.max
        );
    
        if (direction) {
          const WindIconComponent = (ReactIcons as any)[direction.icon];
          return <WindIconComponent size={size}/>;
        } else {
          return <div>No wind-direction icon found</div>;
        }
    };
    
    return <div>{getWindDirectionIcon()}</div>;
}

export default WindyIcon