import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { MyProductDetails } from './src/screens/MyAds/MyProductDetails'

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <MyProductDetails />
    </>
  )
}
