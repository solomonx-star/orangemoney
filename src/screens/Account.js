import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, ScrollView, Platform, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icons1 from "react-native-vector-icons/Fontisto";
import Icons2 from "react-native-vector-icons/AntDesign";
import { s } from "react-native-wind";
import { useNavigation } from "@react-navigation/native";
import ChangePin from "./ChangePin/ChangePin";
import { Share } from 'react-native';
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import { useState } from "react";

const Account = () => {


const [secretCode, setSecretCode] = useState(false)

const [contactUs, setcontactUs] = useState(false)
const [aboutUs, setAboutUs] = useState(false)

  const Navigation = useNavigation();

//Share app
  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome app built with React Native!',
        url: 'https://www.example.com',
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared via activity type (e.g., WhatsApp, Facebook)
          console.log(`Shared via ${result.activityType}`);
        } else {
          // Shared successfully
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dialog dismissed
        console.log('Share dialog dismissed');
      }
    } catch (error) {
      // Handle error
      console.error('Error sharing:', error.message);
    }
  };
  
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
      }}
    >

    <View 
    style={s `w-full h-12 pl-6 justify-center`}
    >
    <Text style={{fontSize:24, fontWeight:"bold"}}> My Account</Text>
    </View>
      <View style={s``}>
        <View style={s`flex-row mt-4 ml-6`}>
          <Icon name="user" size={25} />
          <Text style={s`ml-3  text-base font-semibold`}>079 55 08 16</Text>
        </View>
        <View style={s`ml-6 pt-4 `}>
          <TouchableOpacity>
            <Text style={s` mt-1 font-bold`}>Log out</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={s`bg-white flex-1 mt-4`}>
            <View style={s`ml-6 flex-row`}>
              <Text style={s` mt-3 font-bold text-gray-500`}>Payment methods</Text>
            </View>

            <TouchableOpacity
              style={s`w-full items-center`}
              onPress={() => {
                Navigation.navigate("Scanner");
              }}
            >
              <View style={s`mt-6 w-11/12  h-12 flex-row items-center `}>
              <View>
              </View>
              <Icons name="qrcode-scan" size={24}/>

                <Text style={s` ml-4 text-base font-bold`}>
                  QR Code reader
                </Text>
                  <View style={s` flex-1 items-end`}>
                    <Icon name="chevron-right" size={15} />
                </View>
              </View>
            </TouchableOpacity>


                        {/**Settings begin */}

            <View style={s`border mt-7 border-gray-300`}></View>
            <View style={s`ml-6 flex-row`}>
              <Text style={s` mt-3 font-bold text-gray-500`}>Settings</Text>
            </View>


            {/**Change secret code+modals*/}
            {/**Buttons*/}
            <TouchableOpacity
              style={s`w-full items-center pl-2`}
             onPress={()=>{
                setSecretCode(true)
             }}
            >
              <View style={s`mt-6 w-11/12  h-12 flex-row items-center `}>
              <View>
              </View>
              <Icons1 name="locked" size={24}/>

                <Text style={s` ml-4 text-base font-bold`}>
              Change Secret code
                </Text>
                  <View style={s` flex-1 items-end`}>
                    <Icon name="chevron-right" size={15} />
                </View>
              </View>
            </TouchableOpacity>


               {/**modal1*/}

               <View>
               <Modal
               visible={secretCode}
               >
               <ChangePin/>
               </Modal>
               </View>


               
               {/**Change secret code+modals end*/}
            {/**Face ID */}
            <TouchableOpacity
              style={s`w-full items-center pl-2 `}
            onPress={()=>{
                Navigation.navigate('FaceDetection')
            }}
            >
              <View style={s`mt-6 w-11/12  h-10  flex-row items-center `}>
              <View>
              </View>
              <Icons name="line-scan" size={24}/>

                <Text style={s` ml-4 text-base font-bold`}>
                Face ID                </Text>
                  <View style={s` flex-1 items-end`}>
                    <Icon name="chevron-right" size={15} />
                </View>
              </View>
            </TouchableOpacity>


            <View style={s`border mt-10 border-gray-300`}></View>

            <View style={s`ml-6 flex-row`}>
              <Text style={s`rr mt-3 font-bold text-gray-500`}>Help and contact</Text>
            </View>


           
            {/**Share */}
            <TouchableOpacity
              style={s`w-full items-center pl-2`}
            onPress={()=>{
                shareApp()
            }}
            >
              <View style={s`mt-6 w-11/12  h-12 flex-row items-center `}>
              <View>
              </View>
              <Icon name="share-alt" size={24}/>

                <Text style={s` ml-4 text-base font-bold`}>
              Share the App
                </Text>
                  <View style={s` flex-1 items-end`}>
                    <Icon name="chevron-right" size={15} />
                </View>
              </View>
            </TouchableOpacity>
            
            {/**Contact Us */}
            <TouchableOpacity
              style={s`w-full items-center pl-2`}
              onPress={()=>{
                setcontactUs(true)
             }}
            >
              <View style={s`mt-6 w-11/12  h-12 flex-row items-center `}>
              <View>
              </View>
              <Icons2 name="customerservice" size={24}/>

                <Text style={s` ml-4 text-base font-bold`}>
              Contact us
                </Text>
                  <View style={s` flex-1 items-end`}>
                    <Icon name="chevron-right" size={15} />
                </View>
              </View>
            </TouchableOpacity>

            {/**modal2*/}

            <View>
            <Modal
            visible={contactUs}
            >
            <ContactUs/>
            </Modal>
            </View>

                        {/**Contact Us end*/}

            {/**About Us */}
            <TouchableOpacity
              style={s`w-full items-center pl-2`}
              onPress={()=>{
                setAboutUs(true)
             }}
            >
              <View style={s`mt-6 w-11/12  h-12 flex-row items-center `}>
              <View>
              </View>
              <Icon name="info-circle" size={24}/>

                <Text style={s` ml-4 text-base font-bold`}>
                    About
                </Text>
                  <View style={s` flex-1 items-end`}>
                    <Icon name="chevron-right" size={15} />
                </View>
              </View>
            </TouchableOpacity>
            {/**modal2*/}

            <View>
            <Modal
            visible={aboutUs}
            >
            <AboutUs/>
            </Modal>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
