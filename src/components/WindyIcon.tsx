import * as ReactIcons from 'react-icons/go'; //GoArrowUpLeft

// the component is used to display the windy direction by its correspondent icon and description
const WindyIcon = ({degree, size}: {degree: number, size: number}) => {

    // create the array of objects based on the windy degree
    const directions = [
        { min: 157.5, max: 202.5, icon: 'GoArrowUp' },
        { min: 202.5, max: 247.5, icon: 'GoArrowUpRight' },
        { min: 247.5, max: 292.5, icon: 'GoArrowRight' },
        { min: 292.5, max: 337.5, icon: 'GoArrowDownRight' },
        { min: 337.5, max: 22.5, icon: 'GoArrowDown' },
        { min: 22.5, max: 67.5, icon: 'GoArrowDownLeft' },
        { min: 67.5, max: 112.5, icon: 'GoArrowLeft' },
        { min: 112.5, max: 157.5, icon: 'GoArrowUpLeft' },
    ];
    
    const getWindDirectionIcon = () => {
        const direction = directions.find(
          (dir) => degree >= dir.min && degree < dir.max
        );
    
        if (direction) {
          const WindIconComponent = (ReactIcons as any)[direction.icon];
          return <WindIconComponent data-testid="wind-icon" size={size} color="rgb(77 124 15)"/>;
        } else {
          const WindIconComponent = (ReactIcons as any)["GoArrowDownLeft"];
          return <WindIconComponent size={size} color="rgb(77 124 15)"/>;
        }
    };
    
    return <div>{getWindDirectionIcon()}</div>;
}

export default WindyIcon