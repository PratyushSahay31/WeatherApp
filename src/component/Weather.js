import React, { useEffect, useState } from 'react'
import './CSS/style.css'
import { BsFillCursorFill } from "react-icons/bs";
const Weather = () => {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Delhi");

    useEffect(()=>{
        const fetchApi= async ()=>{
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8c6fa9937926a973670862b2a463543f`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search]);
    return (
        <>
            <div className="container">
                <div className="boxIn">
                    <div className="input">
                        <div>
                            <input id="in" className="inputField" type="search" defaultValue=""
                            onChange={(e) => { setSearch(e.target.value)}}
                            />
                        </div>
                        <div className="location-icon">
                            <BsFillCursorFill />
                        </div>
                        {!city?(<p>No data for this city</p>):(
                            <div>  <div className="title">
                            {search} 
                        </div>
                        
                        <div className="temp">
                            {city.temp} {'\u00b0'}C<br/>
                        </div>
                        <div className="range">
                            min max<br/>
                            {city.temp_min} {'\u00b0'}C <span>|</span> {city.temp_max} {'\u00b0'}C
                        </div></div>)}
                      
                    </div>
                </div>
            </div>
        </>
    )
};
export default Weather;