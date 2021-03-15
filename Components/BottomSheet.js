import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Button,Image } from 'react-native';

//import basic react native components
import { BottomSheet } from 'react-native-btr';

//import to show social icons
import { SocialIcon } from 'react-native-elements';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
  import {Response} from '../Configs/BottomConfig'
const BottomSheetApp = (props) => {
  const [visible, setVisible] = useState(true);

  console.log(props.currentPatient)
  const currentPropDetails = props.currentPatient
  console.log(props.Id)
        props.visible
  const toggleBottomNavigationView = (props) => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
    props.visible=false;
  };
        const Testbox=(props)=>{
            console.log("ITEMS--"+props.item.iconName)
            return(
               
               <View style={{ flexDirection: "column", }}>
                <View
                  style={{
                   
                  //  borderWidth:2,
                    height: hp("12%"),
                    width: wp("25%"),
                    // marginLeft:wp('1%'),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                   <Image
                      resizeMode="contain"
                      style={{ justifyContent: "center", }}
                     source={props.item.imageIcon}
                    />
                  <View
                    style={{ width: "80%",height:hp("5%") ,justifyContent:'center'}}
                  >
                   <Text style={{alignSelf:'center'}}>{props.item.iconName}</Text>
                  </View>
                </View>
              </View>
            )
        }
  if(props.Id===true){
    setVisible(!visible);
  }
  if(props.visible===true){
  return (
    <SafeAreaView style={{}}>
      <View>
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={props.closeHandler}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={props.closeHandler}

          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                //justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  //textAlign: 'center',
                  paddingTop: 10,
                  paddingLeft: 10,
                  fontSize: 20,
                }}
              >
                {currentPropDetails.starttime} -{" "}
                {"  " + currentPropDetails.fullname}
              </Text>
              
               
                  <View
                    style={{
                        flex:1,
                      flexDirection: "row",
                      flexWrap:'wrap',
                      //width: wp("100%"),
                      justifyContent: "space-between",
                    //   alignContent:'space-between'
                    }}
                  >
                  {Response.map((data,index)=>{
           
                   return (<Testbox key={index} item={data}/>)
                })
                  }
                  
                 
                    
                   
                
                  </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
            }else{
               return( <></>)
            }
};

export default BottomSheetApp;

const styles = StyleSheet.create({
 
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    marginBottom:55
    // alignItems: 'center',
  },
});
