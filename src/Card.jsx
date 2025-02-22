import { useState } from 'react'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <div className="card my-3">
      <h3>
        Test counter
      </h3>  
      <button className="btn btn-success mb-1" onClick={() => setCount((count) => count + 1)}>
        Increase
      </button>
      <button className="btn btn-warning mb-1" onClick={() => setCount((count) => count - 1)}>
        Decrease
      </button>
      <h3 className='mt-3'>{count}</h3>
    </div>
  )
}

export default Card
