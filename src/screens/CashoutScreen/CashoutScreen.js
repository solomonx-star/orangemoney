import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { s } from 'react-native-wind';


const CashoutScreen = () => {
  return (
    <View>
      <Text style={s `ml-4 text-base font-bold mt-4`}>Please enter the 6 digit code of the Agent:</Text>
      <View style={s `mt-6`}>
        <Text style={s `ml-4 font-bold text-base text-gray-500`}>Agent code</Text>
        <TextInput 
        style={s `m-4 border-b border-gray-400`}
        />
      </View>
      <View style={s `justify-center items-center mt-32 pt-32`}>
      <TouchableOpacity style={s `bg-orange-500 w-32 h-6 rounded-lg items-center mt-32`}>
        <View style={s ``}>
          <Text style={s `text-center text-white mt-1`}>Next</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default CashoutScreen