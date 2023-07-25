import { View, Text, TouchableOpacity, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { s } from 'react-native-wind';



const Partners = () => {

    return(
        <ScrollView>
            <View>
                <View>
                    <Text className = "text-lg font-bold mt-2 ml-3">Pay your merchant</Text>
                </View>
                <View className = "bg-white h-16 mt-3 mr-3 ml-3 rounded-md shadow-sm">
                    <View className = "flex-row">
                        <View className = "bg-orange-500 h-10 w-10 rounded-full mt-3 ml-3">
                            <Text className = "text-center mt-3 text-white">
                            <Icon name = 'shopping-basket' size={15} />
                            </Text>
                        </View>
                        <View className = "">
                            <Text className = "text-lg font-bold ml-5 mt-2">Pay a merchant</Text>
                            <Text className = "text-xs ml-5">Merchant number or QR code</Text>
                        </View>
                    </View>
                </View>
                <View className = "bg-white h-screen mt-4">
                    <View className = "flex-row justify-evenly mt-3">
                        <View className = "pr-36">
                        <View className = "">
                            <Text className = "text-lg font-bold">Pay your bills</Text>
                        </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text className = "text-orange-600 mt-2">See more</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View>
                    <TouchableOpacity>
                    <View className = "flex-row mt-4">
                        
                        <View className = "bg-slate-300 h-14 w-14 ml-3">
                        <Image 
                        source={require('../../assets/EDSA.jpeg')}
                        style={{ width: '100%', height: '100%' }}
                        />
                        </View>
                            <View>
                            <Text className = "ml-5 text-base font-bold mt-2">EDSA</Text>
                            <Text className = "ml-5 text-xs">Electricity</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View className = "mt-4 flex-row">
                        
                            <View className = " h-14 w-14 ml-3">
                            <Image 
                        source={require('../../assets/Guma.png')}
                        style={{ width: '100%', height: '100%' }}
                        />
                            </View>
                            <View>
                            <Text className = "ml-5 text-base font-bold mt-2">Guma valley</Text>
                            <Text className = "ml-5 text-xs">Water</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View className = "flex-row mt-4">
                        
                        <View className = "bg-slate-300 h-14 w-14 ml-3">
                        <Image 
                        source={require('../../assets/Ignite.jpeg')}
                        style={{ width: '100%', height: '100%' }}
                        />
                        </View>
                            <View>
                            <Text className = "ml-5 text-base font-bold mt-2">Ignite</Text>
                            <Text className = "ml-5 text-xs">Power</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                    </View>
                    <View className = "flex-row mt-16 justify-evenly">
                        <View className = "pr-32">
                            <View>
                                <Text className ="text-lg font-bold">Financial services</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text className = "text-orange-600 mt-1">See more</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className = "flex-row mt-4">
                        <View>
                            <View className = "bg-slate-300 h-14 w-14 ml-3 rounded-full">
                            <Image 
                        source={require('../../assets/wallet.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8}}
                        />
                            </View>
                        </View>
                        <View>
                            <Text className = "ml-5 text-base font-bold mt-2">Access to my bank</Text>
                            <Text className = "ml-5 text-xs">Bank</Text>
                        </View>
                    </View>
                    <View className = "flex-row mt-20 justify-evenly">
                    <View className = "pr-40">
                        <Text className = "text-lg font-bold">Other services</Text>
                    </View>
                    <View>
                        <Text className ="text-orange-600 mt-2">See more</Text>
                    </View>
                    </View>
                    <TouchableOpacity>
                    <View className = "mt-4 flex-row">
                        
                            <View className = "bg-slate-300 h-14 w-14 ml-3"></View>
                            <View>
                            <Text className = "ml-5 text-base font-bold mt-2">Cashout-Send to an Agent</Text>
                            <Text className = "ml-5 text-xs">Other services</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View className = "mt-4 flex-row">
                        
                            <View className = "bg-slate-300 h-14 w-14 ml-3">
                            <Image 
                                source={require('../../assets/reverse.jpeg')}
                                style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                            <View>
                            <Text className = "ml-5 text-base font-bold mt-2">Self Reversal</Text>
                            <Text className = "ml-5 text-xs">Other services</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View className = "mt-4 flex-row">
                        
                            <View className = "bg-slate-300 h-14 w-14 ml-3">
                            <Image 
                                source={require('../../assets/Data.png')}
                                style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                            <View>
                            <Text className = "ml-5 text-base font-bold mt-2">Data Bundles</Text>
                            <Text className = "ml-5 text-xs">Other services</Text>
                            </View>
                        
                    </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </ScrollView>
    )
}


export default Partners;