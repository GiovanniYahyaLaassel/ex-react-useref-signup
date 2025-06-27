import { useState } from 'react';
import SignupForm from './components/SignupForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <SignupForm/>
        
     
      </div>

    </>
  )
}

export default App
