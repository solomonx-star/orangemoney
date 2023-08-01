import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import Icons1 from "react-native-vector-icons/Ionicons";
import Icons2 from "react-native-vector-icons/Fontisto";
const ChangePin = () => {
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
          <View style={s `w-8/12  h-32 items-end flex-row space-y-4`}>
          <View style={s `h-16 w-16 bg-white rounded-full items-center justify-center`}>
          <Icons2 name="locked" size={40} color={"#64B5F6"}/>
          </View>

          <View style={styles.container}>

          <View style={s `w-8 h-8 rounded-full bg-orange-500 `}>
          </View>
          <View style={s `w-8 h-8 rounded-full bg-orange-500 ml-4`}>
          </View>
          <View style={s `w-8 h-8 rounded-full border-orange-500 border ml-4`}>
          </View>
          <View style={s `w-8 h-8 rounded-full border-orange-500 border ml-4`}>
          </View>
          </View>

          </View>
        </View>
      </View>





      {/**Content */}
      <View style={s `w-full h-80  items-center`}>
      <View style={s `w-11/12 mt-6`}>
      <Text style={s `text-xl font-bold`}>
      Orange Money Secret code
      </Text>
      </View>

      <View style={s `w-11/12 mt-4`}>
      <Text style={s `text-lg font-light`}>
        Your Orange Money Secret Code is 4 digits code. You created it when you opened your account.
      </Text>
      </View>

      <View style={s `w-11/12 mt-4 flex-row`}>
      <Text style={s `text-lg font-light`}>
        This code is strictly personal. In case of blocked account,  <Text style={s `text-orange-500`}>please contact Orange customer service </Text>
      </Text>
      </View>
      
      </View>



    <View style={s `w-full flex-1 \ items-center justify-end mb-12`}>
    <TouchableOpacity
    style={s ` w-11/12 items-center h-14 bg-orange-500 justify-center rounded-md`}
    >
    <Text style={s `text-white font-bold text-lg`}>Change my secret code</Text>
    </TouchableOpacity>
    </View>

    </View>
  );
};

export default ChangePin;

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
