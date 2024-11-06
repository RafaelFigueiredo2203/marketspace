import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Toast from 'react-native-toast-message'
import { AuthContextProvider } from './src/contexts/auth-context'
import { Register } from './src/screens/AuthScreens/Register'

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <AuthContextProvider>
        <Register />
      </AuthContextProvider>
      <Toast />
    </>
  )
}
