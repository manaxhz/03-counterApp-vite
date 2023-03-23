import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {


  const [ counter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounter( counter + 1);
    setCounter( (c) => c + 1);

  }

  const handleReset = () => {
    // setCounter( counter + 1);
    setCounter( (c) => value);

  }

  const handleSubtract = () => {
    // setCounter( counter + 1);
    setCounter( (c) => c - 1);

  }



  return (
  <div> 
    <h1>CounterApp</h1>
    <h2> { counter } </h2>

  <div className=' space-x-1'>

      <button 
        onClick={handleSubtract}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          -1
      </button>

      <button 
        onClick={handleReset}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          reset
      </button>

      <button 
        onClick={handleAdd}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          +1
      </button>
  </div>
  </div>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
    value: 'No hay numeros',
}