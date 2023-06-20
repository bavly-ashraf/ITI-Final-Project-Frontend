import React from 'react'
import { useState } from 'react'
import './App.css'
import ImageSlider from './Components/ImageSlider/ImageSlider'
import ProductDetails from './Components/ProductDetails/ProductDetails'

function App() {
  return (
    <>
      <div className='flex justify-between'>
        <ImageSlider className='col-span-8 border border-red-600'/>
        <ProductDetails className='col-span-4' />
      </div>
    </>
  )
}

export default App
