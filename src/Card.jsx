import { useState } from 'react'

function Card() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Test counter
      </p>
    </div>
  )
}

export default Card
