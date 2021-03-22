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
import { widthPercentageToDP } from 'react-native-responsive-screen';
import axios from "axios";
import moment from "moment";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import base64 from "react-native-base64";
//import basic react native components
import BottomSheetApp from "../Components/BottomSheet";
function AppointmentView(props) {
    console.log(props)

    const AppointmentViewList=(props)=>{
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{width:wp('90%'),flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:'grey',height:hp('6%')}}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontSize:15,color:'grey'}}>Name :</Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold'}}>Inaya</Text>
                    </View>
                </View>
                              
            </View>
        )

    }

    return (
     <View >
         <View style={{flexDirection:'row',height:hp('10%')}}>   
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={{borderRadius:2,width:wp("15%"),height:wp('15%'),borderRadius:wp('60%'),justifyContent:'center',alignContent:'center',overflow:'hidden',}}>
                        <Image style={{width:wp("15%"),height:wp('15%'),}} source={require('../assets/EMS_Usericon.png')} />
                </View>
              </View>
              <View style={{flex:3.5,justifyContent:'center',alignItems:'center'}}>
                  <View style={{width:wp('60%'),justifyContent:'center',alignItems:'center'}}><Text shouldAllowFontScaling={false} style={{fontSize:20,fontFamily:'sorafont',fontWeight:'bold'}}>Ishaq shaik</Text></View>
              </View>
              <View style={{flex:0.4,justifyContent:'center'}}>
                  <View style={{alignItems:'center',}}> 
                  <Image
                                  resizeMode="contain"
                                  style={{ justifyContent: "center" }}
                                  source={require("../assets/Group_41.png")}
                                />
                                </View>
              </View>
         </View>
         <AppointmentViewList/>
         
         <AppointmentViewList/>

     </View>
    );
}

export default AppointmentView;