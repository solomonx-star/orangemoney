import { View, Text } from 'react-native'
import React from 'react';
import { s } from 'react-native-wind';
import Icon from 'react-native-vector-icons/FontAwesome';

const DataBundlesScreen = () => {
return (
    <View>
    <View style={s ``}>
        <Text style={s `ml-4 mt-2 font-bold text-lg`}>Please choose:</Text>
    </View>
    <View style={s `h-32 bg-white m-4 rounded-md`}>
        <View style={s `flex-row`}>
            <Text style={s `ml-6 font-bold text-base  mt-5`}>Buy Data Bundle for my Number</Text>
            <View style = {s `ml-20`}>
                        <View style ={s `mt-7`}>
                            <Icon name="chevron-right" size={15}  />
                        </View>
                        </View>
        </View>
        <View  style ={s `border mt-5 border-gray-300 m-4`}></View>
        <View style={s `flex-row`}>
            <Text style={s `ml-6 font-bold text-base `}>Buy Data Bundle for another  Orange {`\n`} number</Text>
            <View style = {s `mt-1`}>
                        <View style ={s `ml-10`}>
                            <Icon name="chevron-right" size={15}  />
                        </View>
                        </View>
        </View>
    </View>
    </View>
)
}

export default DataBundlesScreen;