import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {s} from 'react-native-wind'
import Icons1 from "react-native-vector-icons/Ionicons";
import Icons2 from "react-native-vector-icons/MaterialIcons";

const AboutUs = () => {
  return (
    <View style={s `flex-1 `}>
    <View style={s `w-full items-center h-1/3 bg-gray-300`}>
    <View style={s `w-11/12 justify-end h-1/3`}>
    <TouchableOpacity>
    <Icons1 name='close' size={32}/>
    </TouchableOpacity>
    </View>

    <View style={s `w-full h-2/3 bg-green-500`}>
    <Image
    source={require('../../../assets/city.jpg')}
    style={s `w-full h-full`}
    />
    </View>
    </View>

    <View style={s `w-full items-center`}>
    <View style={s `w-11/12 h-24  mt-4`}>
    <Text style={s `text-xl font-bold`}>Orange Money</Text>
    
    <Text style={s `pt-2 text-xs font-semibold`}>Version: 5.15.01.1936</Text>
    <Text style={s `pt-2 text-xs font-semibold`}>Copyright 2023 Orange Money</Text>
    </View>
    <View>
    </View>
    </View>


    <View style={s `flex-1  items-center`}>


    {/**Diagnostics */}
   <TouchableOpacity style={s `w-full h-16  items-center`}>
   <View style={s `w-11/12  h-full flex-row items-center`}>
   <Text style={s `text-base font-semibold`}>
   Diagnostic tool
   </Text>

   <View style={s `flex-1 items-end`}>
   <Icons2 name='navigate-next' size={24} color={"#9E9E9E"}/>
   </View>
   </View>

   

   </TouchableOpacity>
    <View style={{width:"90%", height:0.5, backgroundColor: "#9E9E9E",}}>
    
    </View>

    {/**Legal information */}
   <TouchableOpacity style={s `w-full h-16  items-center`}>
   <View style={s `w-11/12  h-full flex-row items-center`}>
   <Text style={s `text-base font-semibold`}>
   Legal information
      </Text>

   <View style={s `flex-1 items-end`}>
   <Icons2 name='navigate-next' size={24} color={"#9E9E9E"}/>
   </View>
   </View>

   

   </TouchableOpacity>
    <View style={{width:"90%", height:0.5, backgroundColor: "#9E9E9E",}}>
    
    </View>

    {/**Terms & Conditions */}
   <TouchableOpacity style={s `w-full h-16  items-center`}>
   <View style={s `w-11/12  h-full flex-row items-center`}>
   <Text style={s `text-base font-semibold`}>
   Terms & Conditions
         </Text>

   <View style={s `flex-1 items-end`}>
   <Icons2 name='navigate-next' size={24} color={"#9E9E9E"}/>
   </View>
   </View>

   

   </TouchableOpacity>
    <View style={{width:"90%", height:0.5, backgroundColor: "#9E9E9E",}}>
    
    </View>

    {/**Third party software */}
   <TouchableOpacity style={s `w-full h-16  items-center`}>
   <View style={s `w-11/12  h-full flex-row items-center`}>
   <Text style={s `text-base font-semibold`}>
   Third party software
         </Text>

   <View style={s `flex-1 items-end`}>
   <Icons2 name='navigate-next' size={24} color={"#9E9E9E"}/>
   </View>
   </View>

   

   </TouchableOpacity>
    <View style={{width:"90%", height:0.5, backgroundColor: "#9E9E9E",}}>
    
    </View>

    {/**Trust badge */}
   <TouchableOpacity style={s `w-full h-16  items-center`}>
   <View style={s `w-11/12  h-full flex-row items-center`}>
   <Text style={s `text-base font-semibold`}>
   Trust badge
         </Text>

   <View style={s `flex-1 items-end`}>
   <Icons2 name='navigate-next' size={24} color={"#9E9E9E"}/>
   </View>
   </View>

   

   </TouchableOpacity>
    <View style={{width:"90%", height:0.5, backgroundColor: "#9E9E9E",}}>
    
    </View>
    </View>
    </View>
  )
}

export default AboutUs