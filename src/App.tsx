import { useState, useEffect } from 'react';
import Stars from './Stars.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
		setCount(5);
	}, [])  

  return (
    count > 0 && count <=5 ? <Stars count={count}/> : ''
  );
}

export default App
