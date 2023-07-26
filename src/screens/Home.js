
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { s } from 'react-native-wind';






const Home = ({navigation}) => {
    const [balance, setBalance] = useState('Show balance');
    

    const cashout = () => {
        navigation.navigate('Cashout')
    }

    const data = () => {
        navigation.navigate('DataBundles')
    }

    const merchant = () => {
        navigation.navigate('Merchant')
    }

    const reverse = () => {
        navigation.navigate('SelfReversal')
    }

    const topup = () => {
        navigation.navigate('Topup')
    }

    const transaction = () => {
        navigation.navigate('transaction')
    }

    const transfer = () => {
        navigation.navigate('TransferMoney')
    }

    const handle = () => {
        if (balance === 'Show balance') {
            setBalance('Le 800');
        } else {
            setBalance('Show balance');
        }
    }

    const renderBalanceIcon = () => {
        if (balance === 'Show balance') {
            return <Icon name="eye" size={20} />;
        } else {
            return <Icon name="eye-slash" size={20}  />;
        }
    }


    return(
        <ScrollView>
        <View style ={s ``} >
            <View style = {s `bg-white rounded mt-3 ml-3 mr-64 h-7 w-36`}>
                <View style ={s `ml-3`}>
                    <Text style ={s `font-bold text-center mt-1 mr-3 mt-1`}>Principal account</Text>
                </View>
            </View>
            <View style ={s `bg-white mt-3 ml-3 mr-3 h-40 rounded`}>
                <TouchableOpacity onPress={handle}>
                <View style ={s `mt-3 flex-row justify-center`}>
                    <View style ={s `mt-1`}>
                        <Text style ={s `text-orange-600`}>
                        {renderBalanceIcon()}
                        </Text>
                    </View>
                    <Text style ={s `text-center text-lg text-orange-500 ml-2 font-bold`}>{balance}</Text>
                </View>
                </TouchableOpacity>
                <View style ={s `ml-3 mt-7 flex-row justify-evenly`}>
                <View style ={s `pr-9`}>
                    <TouchableOpacity>
                        <View style ={s `-ml-16`}>
                            <Text style ={s `font-bold `}>Last Transaction</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style ={s `-mr-16`}>
                <TouchableOpacity>
                    <View style ={s `flex-row`}>
                    <Text style ={s `text-orange-600 font-bold`}>See more</Text>
                    <View style ={s `ml-3`}>
                        <Text style ={s `text-orange-600 `}>
                            <Icon name="chevron-right" size={18}  />
                        </Text>
                    </View>
                    </View>
                </TouchableOpacity>
                </View>
                
                
                </View>
                <TouchableOpacity>
                <View style ={s `mt-10 flex-row justify-center`}>
                    <View style ={s ``}>
                        <Text style ={s `mr-2 text-gray-400`}>
                            <Icon name='rotate-left' size={25} />
                        </Text>
                    </View>
                    <Text style ={s `text-center text-gray-400 font-bold mt-1`}>No transaction</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style ={s `mt-7 ml-4`}>
                <Text style ={s `text-lg font-bold`}>My services</Text>
            </View>
            <View style ={s `flex-row justify-between ml-3 mr-3 mt-7`}>
            <View>
                <TouchableOpacity onPress={topup()}>
                <View style ={s `bg-white w-28 h-32 rounded`}>
                        <Image 
                        source={require('../../assets/orange1.png')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                </View>
                </TouchableOpacity>
                <Text style ={s `text-center mt-3 font-bold`}>Top up</Text>
                <Text style ={s `text-center font-bold`}>credit</Text>
            </View>
            <View>
                <TouchableOpacity>
                <View style = {s `bg-white w-28 h-32 rounded`}>
                <Image 
                        source={require('../../assets/orange2.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                </View>
                </TouchableOpacity>
                <Text style = {s `text-center mt-3 font-bold`}>Transfer</Text>
                <Text style = {s `text-center font-bold`}>Money</Text>
            </View>
            <View>
                <TouchableOpacity>
                <View style = {s `bg-white w-28 h-32 rounded`}>
                <Image 
                        source={require('../../assets/orange3.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                </View>
                </TouchableOpacity>
                
                <Text style = {s `text-center font-bold mt-3`}>Data bundles</Text>
                
                </View>
            </View>
            
            <View style = {s `flex-row justify-between mt-8 mr-3 ml-3`}>
                <View>
                    <TouchableOpacity>
                    <View style = {s `bg-white h-20 w-20 rounded-full`}>
                    <Image 
                        source={require('../../assets/merchant.jpeg')}
                        style={{ width: '100%', height: '100%' }}
                        />
                    </View>
                    </TouchableOpacity>
                    
                    <Text style = {s `text-center font-bold mt-3`}>Pay a</Text>
                    <Text style = {s `text-center font-bold`}>merchant</Text>
                </View>
                <View>
                <TouchableOpacity>
                <View style = {s `bg-white h-20 w-20`}>
                <Image 
                        source={require('../../assets/orangemoney.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                </View>
                </TouchableOpacity>
                    
                    <Text style = {s `text-center font-bold mt-3`}>Cashout-</Text>
                    <Text style = {s `text-center font-bold`}>Send to</Text>
                </View>
                <View>
                <TouchableOpacity>
                <View style = {s `bg-white h-20 w-20 `}>
                <Image 
                        source={require('../../assets/reverse.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                </View>
                </TouchableOpacity>
                    
                    <Text style = {s `text-center font-bold mt-3`}>Self</Text>
                    <Text style = {s `text-center font-bold`}>Reversal</Text>
                </View>
            </View>
            
                <View style = {s `flex-row justify-evenly ml-3 mt-10`}>
                    <View style = {s `-ml-3`}>
                    <View style = {s `pr-7 -ml-4`}>
                    <Text style = {s `text-lg font-bold`}>Favourite partners</Text>
                    </View>
                    </View>
                    <TouchableOpacity>
                    <View style = {s `flex-row ml-10`}>
                    <Text style = {s `text-orange-600 font-bold`}>See more</Text>
                        <View style = {s `ml-3`}>
                        <Text style = {s `text-orange-600`}>
                            <Icon name="chevron-right" size={18}  />
                        </Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                </View>
            
            <View style = {s `mt-6 flex-row justify-evenly`}>
            <View style = {s ``}>
                    <View style = {s `bg-white h-16 w-16 rounded-full`}>
                    <Image 
                        source={require('../../assets/wallet.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                    </View>
                    <Text style = {s `text-center mt-3`}>Access</Text>
                    <Text style = {s `text-center`}>my bank</Text>
                </View>
                <View>
                    <View style = {s `bg-white h-16 w-16`}>
                    <Image 
                        source={require('../../assets/Betsalone.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                    </View>
                    <Text style = {s `text-center mt-3`}>Betsalone</Text>
                </View>
                <View>
                    <View style = {s `bg-white h-16 w-16`}>
                    <Image 
                        source={require('../../assets/EDSA.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                    </View>
                    <Text style = {s `text-center mt-3`}>EDSA</Text>
                </View>
                <View>
                    <View style = {s `bg-white h-16 w-16`}>
                    <Image 
                        source={require('../../assets/Guma.png')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                    </View>
                    <Text style = {s `text-center mt-3`}>Guma</Text>
                    <Text style = {s `text-center`}>valley</Text>
                </View>
            </View>
            <View style = {s `mt-10 ml-4`}>
                <Text style = {s `text-lg font-bold`}>Tips</Text>
            </View>
            <View style = {s `flex-col mt-4`}>
                <View style = {s `bg-white h-28 ml-3 mr-3 rounded flex-row`}>
                    <View style = {s `bg-slate-400 h-28 w-32 rounded`}>
                    <Image 
                        source={require('../../assets/share.jpeg')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                    </View>
                    <TouchableOpacity>
                    <View>
                    <Text style ={s `ml-3 font-bold mt-3`}>Share the Orange money{'\n'}application with your loved {'\n'}ones. </Text>
                    <Text style ={s `text-orange-600 mt-8 ml-3 font-bold`}>Share</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style = {s `bg-white h-28 ml-3 mr-3 rounded mt-4 flex-row`}>
                    <View style = {s `bg-slate-400 h-28 w-32 rounded`}>
                    <Image 
                        source={require('../../assets/QR.png')}
                        style={{ width: '100%', height: '100%', borderRadius: 8 }}
                        />
                    </View>
                    <TouchableOpacity>
                    <View>
                    <Text style ={s `ml-3 font-bold mt-3`}>Scan a QR cde linked to an {'\n'}Orange money service. </Text>
                    <Text style ={s `text-orange-600 mt-10 ml-3 font-bold`}>Scan</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
    );
}


export default Home;