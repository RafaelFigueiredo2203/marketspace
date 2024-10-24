import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ProductDetails } from './src/screens/ProductDetails'

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <ProductDetails />
    </>
  )
}
