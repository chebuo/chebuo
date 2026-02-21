import { useState } from 'react'
import './App.css'
import chebu from '/assets/chebu_fine.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <a 
        href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%82%A7%E3%83%96%E3%83%A9%E3%83%BC%E3%82%B7%E3%82%AB"
        target="_blank"
        rel="noopener noreferrer"
        >
        <img src={chebu} alt="chebu" />
      </a>
      <h1>chebuoのポートフォリオ</h1>
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        tomatotabetai
      </p>
    </>
  )
}

export default App
