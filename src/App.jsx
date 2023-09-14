import { useState } from 'react'
import './App.css'
import Modules from './Modules/Modules'
import Holders from './Holders/Holders'

function App() {

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='py-5'>
        <h1 className='text-center text-3xl font-bold'>Course Registration</h1>
      </div>      
      <div className='flex gap-4'>
        <Modules></Modules>
        <Holders></Holders>        
      </div>
    </div>
  )
}

export default App
