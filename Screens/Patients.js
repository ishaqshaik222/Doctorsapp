import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import axios from "axios";
import moment from "moment";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Checkbox } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import base64 from "react-native-base64";
//import basic react native components
import BottomSheetApp from "../Components/BottomSheet";
import APIURl from "../ApiConfig";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Overlay } from "react-native-elements";

function Patients(props) {
  console.log("props __________ " ,props)
  
  return (
  <View>
      <View style={{flexDirection:'row',height:hp('8%')}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}>
            <View
                  style={{
                    borderRadius: 2,
                    width: wp("10%"),
                    height: wp("10%"),
                    borderRadius: wp("60%"),
                    justifyContent: "center",
                    alignContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{ width: wp("10%"), height: wp("10%") }}
                    source={require("../assets/EMS_Usericon.png")}
                  />
                </View>
            </View>
            <View style={{flex:3,backgroundColor:'yellow'}}>
            <View style={{backgroundColor:'red'}}>
             <Text style={{fontWeight:'bold',fontFamily:'SoraSemiBold'}}>Jhonson</Text>
             </View>
             <View style={{backgroundColor:'#279dd8'}}>
             <Text style={{fontSize:wp('3%'),color:'#5D5D5D'}}>M | 03/03/1986 | 34 Yrs</Text>
             </View>
            </View>
            <View style={{flex:0.6,justifyContent:'center',alignItems:'center',backgroundColor:'lightgreen'}}>
            <View
                  style={{
                    borderRadius: 2,
                    width: wp("10%"),
                    height: wp("10%"),
                    borderRadius: wp("60%"),
                    justifyContent: "center",
                    alignContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{ width: wp("10%"), height: wp("10%") }}
                    source={require("../assets/Ellipse-43.png")}
                  />
                </View>
            </View>
            <View style={{flex:0.4,justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
              <Image
                      style={{ }}
                      source={require("../assets/Group_41.png")}
                    />
            </View>
      </View>
  </View>
  );
}

export default Patients;