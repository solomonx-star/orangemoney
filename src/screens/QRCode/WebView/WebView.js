import { View, Text } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'
const Webview = ({route}) => {
    const {data} = route.params
    console.log(data)
  return (
   <WebView
   source={{uri:''}}
   />
  )
}

export default Webview