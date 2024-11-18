import { useState } from 'react';
import './App.css';
import search from './assets/icons/search.svg';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from './Components';
import Underpasses from './Components/Underpasses'; // Import the Underpasses component
import UnderpassDetail from './Components/UnderpassDetail'; // Import the UnderpassDetail component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  
  // State for search bar visibility
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const submitCity = () => {
    setPlace(input);
    setInput('');
  };

  return (
    <Router>
      <div className='w-full h-screen text-white px-8'>
        <nav className='w-full p-3 flex justify-between items-center'>
          <h1 className='font-bold tracking-wide text-3xl'>Rain Prediction</h1>
          
          {/* Show search bar only if it hasn't been clicked */}
          {!isSearchClicked && (
            <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
              <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
              <input
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    submitCity();
                  }
                }}
                type="text"
                placeholder='Search city'
                className='focus:outline-none w-full text-[#212121] text-lg'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          )}
        </nav>
        
        {/* Centered button to navigate to the Underpasses page */}
        <div className='w-full flex justify-center mt-4'>
          <Link to="/underpasses">
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600'
              onClick={() => setIsSearchClicked(true)} // Hide the search bar when this button is clicked
            >
              Bangalore underpasses
            </button>
          </Link>
        </div>

        {/* Define routes outside of the main content */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BackgroundLayout></BackgroundLayout>
                <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
                  <WeatherCard
                    place={thisLocation}
                    windspeed={weather.wspd}
                    humidity={weather.humidity}
                    temperature={weather.temp}
                    heatIndex={weather.heatindex}
                    iconString={weather.conditions}
                    conditions={weather.conditions}
                  />

                  <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
                    {values?.slice(1, 7).map((curr) => {
                      return (
                        <MiniCard
                          key={curr.datetime}
                          time={curr.datetime}
                          temp={curr.temp}
                          iconString={curr.conditions}
                          rainAmount={curr.precip} // Pass the rain data to MiniCard
                        />
                      );
                    })}
                  </div>
                </main>
              </>
            }
          />
          <Route path="/underpasses" element={<Underpasses />} />
          <Route path="/underpass/:id" element={<UnderpassDetail />} /> {/* Dynamic route for underpass details */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

