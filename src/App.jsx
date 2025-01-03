import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mensaje,setMensaje] = useState("Ericsito es lo maximo")
  return (
    <div>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default App;
