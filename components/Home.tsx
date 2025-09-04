import React from 'react';
import Hero from "./Hero/Hero";
import WeatherApp from "./weather-details/weatherCards";

// adding props to the Home component
interface HomeProps {
  weatherData: any; 
}

const Home: React.FC<HomeProps> = ({ weatherData }) => {
  return (
    <div className="overflow-hidden">
      <div>
        <Hero weatherData={weatherData}/>
      </div>
      <div className='px-0' style={{marginTop: '0px'}}>
        <WeatherApp  weatherData={weatherData}/>
      </div>
    </div>
  );
};

export default Home;