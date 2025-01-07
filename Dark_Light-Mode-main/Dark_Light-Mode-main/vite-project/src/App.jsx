import React from 'react'
import  {DarkLight}  from './components/DarkLight'
import {ThemeProvider} from './components/DarkLight'; // Correct path


const App = () => {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  )
}

export default App
