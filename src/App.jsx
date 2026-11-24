import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ProductStore from './components/product store'
import './App.css'

function App() {


  return (
    <>
<div className="p-12 border-2 mr-1 mt-1 w-100 bg-amber-300 ml-7 rounded-md">
  <h1  className="text-3xl font-bold text-blue-600">welcome to react</h1>
  <h2 className="text-1xl font-bold text-black-600">login form</h2>
  <br />
  <div className="flex items-center">
  <label className="w-20">Email:</label>
  <input type="text"placeholder="ender ur email"className="boder boder-red-700 rounded-md bg-gray-300 p-2 w-40" />
  </div>
  <br />
  <div className="flex items-center">
  <label className="w-20">password:</label>
  <input type="text" placeholder="ender ur password"className="boder boder-red-700 rounded-md bg-gray-300 p-2 w-40" />
  </div>
  <br />
  <button className="boder boder-red-700 rounded-md bg-gray-300 p-2">login</button>

   </div>  
   <ProductStore/>  
    </>
  )
}

export default App
