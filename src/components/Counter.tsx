import { useState } from 'react'

export const Counter = () => {
  
  const [counter, setcounter] = useState(0);

  const incrementar = (numero:number = 1):void => {
    setcounter(counter+numero)
  }

  return (
    <div>
      <h3>Counter: useState</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        onClick={()=> incrementar(1)} 
        className='btn btn-outline-primary'>+1
      </button>
      <button
        onClick={()=> incrementar(5)} 
        className='btn btn-outline-primary'>+5
      </button>
      <button
        onClick={()=> setcounter(0)} 
        className='btn btn-outline-danger'>Reset
      </button>
    </div>
  )
}