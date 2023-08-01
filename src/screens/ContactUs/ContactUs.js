import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import Icons1 from "react-native-vector-icons/Ionicons";
import Icons2 from "react-native-vector-icons/Fontisto";
const ContactUs = () => {
  return (
    <View style={s`flex-1 `}>
      <View style={s`w-full h-1/4 bg-blue-400 justify-center`}>
        <View style={s`w-full h-40  items-center`}>
          <View style={s`w-11/12`}>
            <TouchableOpacity>
              <Icons1 name="chevron-back" size={32} />
            </TouchableOpacity>
          </View>


          {/** view */}
          <View style={s `w-8/12  h-32 items-center justify-center `}>
         <Image
         source={{uri:"https://www.kindpng.com/picc/m/111-1113160_charlotte-marketing-agency-direct-mail-icon-transparent-hd.png"}}
         style={s `w-32 h-32 rounded-full`}
         />

          </View>
        </View>
      </View>





      {/**Content */}
      <View style={s `w-full h-80  items-center`}>
      <View style={s `w-11/12 mt-6`}>
      <Text style={s `text-xl font-bold`}>
      Contact us
      </Text>
      </View>

      <View style={s `w-11/12 mt-4`}>
      <Text style={s `text-lg font-light`}>
        If you are in the country where you have your orange Money account, you can contact Orange Money customer support directly by telephone.
      </Text>
      </View>

      
      </View>



    <View style={s `w-full flex-1 \ items-center justify-end mb-12`}>
    <TouchableOpacity
    style={s ` w-11/12 items-center h-14 bg-orange-500 justify-center rounded-md`}
    >
    <Text style={s `text-white font-bold text-lg`}>Call Customer service</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={s ` w-11/12 items-center h-14  justify-center rounded-md mt-4`}
    >
    <Text style={s `text-orange-500 font-bold text-lg`}>Send an email</Text>
    </TouchableOpacity>
    </View>

    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        width: 240,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
        marginLeft:16,
        flexDirection: "row",
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        borderWidth:4,
        borderColor:"#EEEEEE"
    }
})


export default ContactUs