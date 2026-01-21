import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [sites, setSites] = useState([])

  useEffect(() => {
    async function fetchData(){
    const response = await fetch("/Project3Files/BoyleSites.json")
      const result = await response.json()
      setSites(result)
  }
  fetchData()
}, [])

  console.log(sites)

  return (
    <div className="App">
      <header className="App-header">
        <p>{sites.length}</p>
      </header>
    </div>
  );
}

export default App;
