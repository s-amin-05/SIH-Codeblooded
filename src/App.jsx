import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './Pages/Project/Project'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='bg-blue-600 text-red-600'>Test</div>
      <Project />
          
    </>
  )
}

export default App
