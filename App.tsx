import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { CreateAd } from './src/screens/AdForms/CreateAd'

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <CreateAd />
    </>
  )
}
