import React, { useState } from 'react'
import './index.css'

type GetWeatherFunction = (city: string) => void;

interface ButtonGroupProps {
  cities: string[];
  getWeather: GetWeatherFunction;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ cities, getWeather }) => {
    const [clickedId, setClickedId] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setClickedId(index);
        getWeather(cities[index]);
      };

    return (
    <>
    {cities.map((city, index) => (
        <button key={index} onClick={(event) => handleClick(event, index)}
            className={index === clickedId ? "button-city active" : "button-city"}>{city}</button>
    ))}
    </>
  )
}
