import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React,{useEffect,useState} from 'react';
import {
  LocationIcon,
  StarIcon,
  ClockIcon,
  TelephoneIcon,
} from '../../assets/generatedicons';
import MapView,{Marker} from 'react-native-maps';
import { useIsFocused } from '@react-navigation/native';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';


const HomeDetails = ({navigation,route}:any) => {
  // const [lat,setlat] = useState<Double>(35);
  // const [long,setlong] = useState<Double>(35);
const isFocused = useIsFocused()
   const {item}: any = route.params

//   useEffect(() => {
//   if(isFocused){
// setlat(item.lat)
// setlong(item.long)
//   }
//   }, [isFocused])
  
  const lat =  parseFloat(item.lat)
  const long =  parseFloat(item.long)
  return (
    <SafeAreaView style={styles.mainCont}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.detailsImg}>
          <Image
            style={{width: 340, height: 253}}
            source={require('../../assets/images/testimg.png')}
          />
          <View></View>
        </View>
        <View style={styles.secondaryCont}>
          <View>
            <Text style={styles.textStylePrimary}>{item.name}</Text>
          </View>
          <View style={[styles.iconstack, {columnGap: 3}]}>
            <StarIcon width="15" />
            <Text style={styles.textStyleSecondary}>4.3</Text>
          </View>
        </View>
        <View style={styles.thirdCont}>
          <Text style={styles.textStylePrimaryThird}>Information</Text>
          <View style={{rowGap: 8}}>
            <View style={styles.iconstack}>
              <ClockIcon width="15" />
              <Text style={styles.textStyleThird}>
                Mon - Fri, 08:00 - 23:00
              </Text>
            </View>
            <View style={styles.iconstack}>
              <TelephoneIcon width="14" />
              <Text style={styles.textStyleThird}>+994 01 234 56 78</Text>
            </View>
            <View style={styles.iconstack}>
              <LocationIcon width="14" />
              <Text style={styles.textStyleThird}>Nizami küçəsi, 203B</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdCont}>
          <Text style={styles.textStylePrimaryThird}>Map</Text>
          <View style={styles.mapStyle}>
            
          <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
          
          
        }} >
        <Marker coordinate={{ latitude:lat, longitude:long}} />
      </MapView>
          </View>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnStyleText}>Go to map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDetails;

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: '#1C1C1C',
    flex: 1,
  },
  detailsImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  secondaryCont: {
    margin: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStylePrimary: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  textStyleSecondary: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  thirdCont: {
    marginHorizontal: 18,
    marginBottom: 18,
    rowGap: 10,
  },
  textStylePrimaryThird: {
    color: '#E8E8E8',
    fontSize: 16,
    fontWeight: '600',
  },
  textStyleThird: {
    color: '#B9B9B9',
    fontSize: 14,
    fontWeight: '400',
  },
  mapStyle: {
    marginTop: 8,
    width: 343,
    height: 157,
    backgroundColor: '#B9B9B9',
    borderRadius: 12,
  },
  btnStyle: {
    backgroundColor: '#018CF1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 12,
  },
  btnStyleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  iconstack: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
