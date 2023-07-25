import { View, Text } from 'react-native'
import React from 'react'
import TabNav from './src/components/Navigation/TabNav'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
    <TabNav/>
</NavigationContainer>
  )
}

export default App