import React, { useState,useEffect } from 'react'
import './App.css';
import Axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [options, setOptions] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9f3442e129fd928d90ac0f7f3478311e`
  
  
    
  const cities=["bhopal","Bangalore","chennai","kolkata","delhi","hyderabad","jaipur","kanpur","kochi","Mumbai"]

   function searchLocation ()
    {
      Axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      
    }
  

  return (
    <div className="app">
      <div className="search">
   
            <Dropdown
                options={cities}
                onChange ={(e) => {
                  setLocation(e.value)}
                  
              }
                
                placeholder="Location"
              />  
              <button onClick={searchLocation}>view weather</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;