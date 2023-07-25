import 'react-native-gesture-handler';
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { s } from 'react-native-wind';





const Account = () =>{
    return(
        <ScrollView>
        <View className = "">
            <View className ={s `flex-row mt-4 ml-3`}>
                <Icon name = 'user' size = {25} color = '' />
                <Text className = "ml-3  text-base font-semibold">079 55 08 16</Text>
            </View>
            <View className = "ml-3">
                <TouchableOpacity>
                    <Text className = "text-orange-500 mt-1 font-bold">Log out</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View className = "bg-white h-screen mt-4">
                    <View className = "ml-3 flex-row">
                        <Text className = "text-slate-400 mt-3 font-bold">Payment methods</Text>
                    </View>
                    <View className = "mt-10 ml-3 flex-row">
                        <View className = "bg-slate-200 h-10 w-10"></View>
                        <Text className = "mt-2 ml-3 text-base font-bold">QR Code reader</Text>
                        <View className = "mt-3 ml-48">
                            <Icon name="chevron-right" size={15}  />
                        </View>
                    </View>
                    <View className = "border mt-7 border-gray-300"></View>
                    <View className = "ml-3 flex-row">
                        <Text className = "text-slate-400 mt-3 font-bold">Settings</Text>
                    </View>
                    <View className = "mt-10 ml-3 flex-row">
                        <View className = "bg-slate-200 h-10 w-10"></View>
                        <Text className = "mt-2 ml-3 text-base font-bold">Change secret code</Text>
                        <View className = "mt-3 ml-40">
                            <Icon name="chevron-right" size={15}  />
                        </View>
                    </View>
                    <View className = "mt-5 ml-3 flex-row">
                        <View className = "bg-slate-200 h-10 w-10"></View>
                        <Text className = "mt-2 ml-3 text-base font-bold">Touch ID</Text>
                        <View className = "mt-3 ml-64">
                            <Icon name="chevron-right" size={15}  />
                        </View>
                    </View>
                    <View className = "border mt-10 border-gray-300"></View>
                    <View className = "ml-3 flex-row">
                        <Text className = "text-slate-400 mt-3 font-bold">Help and contact</Text>
                    </View>
                    <View className = "mt-10 ml-3 flex-row">
                        <View className = "bg-slate-200 h-10 w-10">
                        </View>
                        <Text className = "mt-2 ml-3 text-base font-bold">Share the App</Text>
                        <View className = "mt-3 ml-48">
                            <Icon name="chevron-right" size={15}  />
                        </View>
                    </View>
                    <View className = "mt-5 ml-3 flex-row">
                        <View className = "bg-slate-200 h-10 w-10"></View>
                        <Text className = "mt-2 ml-3 text-base font-bold">Contact us</Text>
                        <View className = "mt-3 ml-56">
                            <Icon name="chevron-right" size={15}  />
                        </View>
                    </View>
                    <View className = "mt-5 ml-3 flex-row">
                        <View className = "bg-slate-200 h-10 w-10"></View>
                        <Text className = "mt-2 ml-3 text-base font-bold">About</Text>
                        <View className = "mt-3 ml-64">
                            <Icon name="chevron-right" size={15}  />
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}


export default Account;