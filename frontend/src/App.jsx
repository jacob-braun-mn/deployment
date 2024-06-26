import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [hello, setHello] = useState("")
  const [test, setTest] = useState("")

  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
        setHello(data.message)
      })
    fetch("http://localhost:8000/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
        setTest(data.message)
      })
  }, [])

  return (
    <div className="results">
      <div className="hello">
        <h2>Hello API Call:</h2>
        <p>{hello}</p>
      </div>
      <div className="test">
        <h2>Test API Call:</h2>
        <p>{test}</p>
      </div>
    </div>
  )
}

export default App
