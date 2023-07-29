import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import {s} from 'react-native-wind'


export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

const [dataMain,setData]= useState('')

  const navigation = useNavigation()
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
    console.log(dataMain)
    if (dataMain!==''){
        navigation.navigate('WebView', {dataMain})
    }
  }, [dataMain]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
  
    if(data){
        Linking.openURL(`${data}`)
        setTimeout(() => {
            navigation.navigate('Home')
        }, 1000);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      <View
      style={s ` w-full items-center`}
      >
      <View 
      style={s `bg-white w-20 h-20 items-center justify-center rounded-full mb-3 border-orange-600`}
      >
      <Button

      style={{backgroundColor: "white",}}
      title={'Cancel'}
      onPress={() => {
        navigation.navigate('HomeScreen')
      }}
      />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
