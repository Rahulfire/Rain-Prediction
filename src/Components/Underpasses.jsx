import React from 'react';
import { Link } from 'react-router-dom';
import underpass1 from '../assets/images/underpass1.jpg';
import underpass2 from '../assets/images/underpass2.jpg';
import underpass3 from '../assets/images/underpass3.jpg';
import underpass4 from '../assets/images/underpass4.jpg';

const Underpasses = () => {
  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center'>
      <h2 className="text-4xl text-white mb-8">Bangalore Underpasses</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4'>
        {/* Underpass 1 */}
        <Link to="/underpass/1" className="relative w-full h-64 sm:h-[250px] md:h-[300px]">
          <img src={underpass1} alt="Underpass 1" className='w-full h-full object-cover' />
          <div className='absolute top-0 left-0 w-full text-center text-white bg-opacity-50 bg-black p-2'>
            KR Circle Underpass
          </div>
        </Link>

        {/* Underpass 2 */}
        <Link to="/underpass/2" className="relative w-full h-64 sm:h-[250px] md:h-[300px]">
          <img src={underpass2} alt="Underpass 2" className='w-full h-full object-cover' />
          <div className='absolute top-0 left-0 w-full text-center text-white bg-opacity-50 bg-black p-2'>
            Madiwala Underpass
          </div>
        </Link>

        {/* Underpass 3 */}
        <Link to="/underpass/3" className="relative w-full h-64 sm:h-[250px] md:h-[300px]">
          <img src={underpass3} alt="Underpass 3" className='w-full h-full object-cover' />
          <div className='absolute top-0 left-0 w-full text-center text-white bg-opacity-50 bg-black p-2'>
            Hennur Underpass
          </div>
        </Link>

        {/* Underpass 4 */}
        <Link to="/underpass/4" className="relative w-full h-64 sm:h-[250px] md:h-[300px]">
          <img src={underpass4} alt="Underpass 4" className='w-full h-full object-cover' />
          <div className='absolute top-0 left-0 w-full text-center text-white bg-opacity-50 bg-black p-2'>
            Richmond Circle Underpass
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Underpasses;









