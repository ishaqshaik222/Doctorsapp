import React, { Component, useState } from "react";
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
// import CalendarStrip from "react-native-calendar-strip";
//import CalendarStrip from 'react-native-slideable-calendar-strip';

// import CalendarStrip from "../Components/CalendarStrip";
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
import { UserContext, BottomHeaderContext } from "../Components/CommonContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Overlay } from "react-native-elements";

import CalendarStrip from '../Components/StripCalender/CalendarStrip';
export default function Appointment({navigation}) {
  const [selectedDate,setSelectedDate] =React.useState(moment(new Date()).format("YYYY-MM-DD"))
const [nextDay,setNextDay]=React.useState(moment(new Date()).add(1, "day").format("YYYY-MM-DD"))
const [responseData,setResponseData]=React.useState([]);
const [visible,setVisible]=React.useState(false);
const [clickedId,setClickedId]=React.useState(0);
const [currentPatient,setCurrentPatient]=React.useState({});
const [isLoading,setIsLoading]=React.useState(false);

  const getTodaysAppointment=(currentDate, nextDate)=> {
    // alert("getTodaysAppointmentCalled")
    console.log("currentDate-----" + currentDate);
    console.log("nextDate-----" + nextDate);
    var bodyFormData = new FormData();
    var username = "smilesadmin@gmail.com";
    var password = "smilesadmin";
    const authHeader = "Basic " + base64.encode(`${username}:${password}`);
    bodyFormData.append("startdate", currentDate);
    bodyFormData.append("enddate", nextDate);
    bodyFormData.append("status", "-1");
    bodyFormData.append("practitioner", "-1");
    setIsLoading(true);
    axios
      .post("https://mobileapp.doctor/api/v1/appointments/all", bodyFormData, {
        headers: { Authorization: authHeader },
      })
      .then(
        (result) => {
         
          setResponseData(result.data)
          setIsLoading(false)
          //console.log(this.state.responseData.length)
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setResponseData([])
          setIsLoading(false)
        }
      );
    //console.log("will getTodaysAppointment" + moment().format("DD/MM/YYYYY"));
  }

  React.useEffect(()=>{
    let unmounted = false;
    var bodyFormData = new FormData();
    var username = "smilesadmin@gmail.com";
    var password = "smilesadmin";
    const authHeader = "Basic " + base64.encode(`${username}:${password}`);
    bodyFormData.append("startdate", selectedDate);
    bodyFormData.append("enddate", nextDay);
    bodyFormData.append("status", "-1");
    bodyFormData.append("practitioner", "-1");
    setIsLoading(true)
    axios
      .post("https://mobileapp.doctor/api/v1/appointments/all", bodyFormData, {
        headers: { Authorization: authHeader },
      })
      .then(
        (result) => {
          setResponseData(result.data)
          setIsLoading(false)
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
         
            setResponseData([])
            setIsLoading(false)
       
        }
      );
    //console.log("will mount" + moment().format("DD/MM/YYYYY"));
    //console.log("asdfasdf"+moment().format('DD/MM/YYYYY'))
    return () => { unmounted = true };
  },[])

 const closeHandler = () => {
    
    setVisible(!visible )
  };
  //  toggleBottomNavigationView = () => {
  //     //Toggling the visibility state of the bottom sheet
  //     this.setState({visible:true});
  //   };
const navigateToAppointmentView=()=>{
  //this.setState({ visible: !this.state.visible });
  setVisible(!visible )
   navigation.push('AppointmentDetails',currentPatient)
};
  
    return (
      <View style={styles.container} allowFontScaling={false}>
        {/*  */}
        <View
          style={
            {
              //height: hp("16%"),
              //borderBottomWidth: 1,
              //borderColor: "#F1F3FF",
              //  justifyContent: "space-around",
              //  backgroundColor:'pink'
            }
          }
        >
          {/* <CalendarStrip
            style={{}}
            selectedDate={this.state.selectedDate}
            onPressDate={(date) => {
              // alert(moment(date).format("YYYY-MM-DD"))
              this.setState({
                selectedDate: moment(date).format("YYYY-MM-DD"),
                nextDay: moment(new Date(date))
                  .add(1, "day")
                  .format("YYYY-MM-DD"),
              });
              this.getTodaysAppointment(
                moment(date).format("YYYY-MM-DD"),
                moment(new Date(date)).add(1, "day").format("YYYY-MM-DD")
              );
            }}
            onPressGoToday={(today) => {
              this.setState({ selectedDate: today });
            }}
            // onSwipeDown={() => {
            //   alert('onSwipeDown');
            // }}
            markedDate={[]}
            weekStartsOn={1} // 0, 1,2,3,4,5,6 for S M T W T F S, defaults to 0
          /> */}
           <CalendarStrip   
           shouldAllowFontScaling={false}
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'border', duration: 200,
                    // borderWidth: 1, borderHighlightColor: 'red',
                  // backgroundColor:'red'  
                  }}
                    style={{height: hp('8%'),borderColor:'#F1F3FF',borderBottomWidth:1,  }}
                    calendarHeaderStyle={{color: 'black'}}
                    calendarColor={'#fff'}
                    dateNumberStyle={{color: 'black',}}
                    dateNameStyle={{color: 'black'}}
                    highlightDateNumberStyle={{color: 'black'}}
                    highlightDateNameStyle={{color: 'black'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    scrollable={true}
                    showMonth={true}
                   // scrollerPaging={true}
                    highlightDateContainerStyle={{backgroundColor:'#FCB025',}}
                    selectedDate={moment()}
                    // datesWhitelist={datesWhitelist}
                    // datesBlacklist={datesBlacklist}
                     iconLeft={false}
                    iconRight={false}
                    //iconContainer={{flex: 0.1}}
                    dayContainerStyle={{marginTop:0,width:30,height:30,borderRadius:15}}
                    showMonth={true}
                    showDayName={true}
                    // scrollToOnSetSelectedDate={true}
                   
                   // dateNumberStyle={{backgroundColor:'red',height:}}
                    dateContainerStyle
                  
                    onDateSelected={(date) => {
                      // alert(moment(date).format("YYYY-MM-DD"))
                   
                      setSelectedDate(moment(date).format("YYYY-MM-DD"));
                      setNextDay( moment(new Date(date)).add(1, "day").format("YYYY-MM-DD"),
                  
                      getTodaysAppointment(moment(date).format("YYYY-MM-DD"),moment(new Date(date)).add(1, "day").format("YYYY-MM-DD")))
                    }}
                />
        </View>
        {isLoading ? (
          <Overlay isVisible={true}>
            <ActivityIndicator
              animating={true}
              color={Colors.blueA100}
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          </Overlay>
        ) : (
          <View
            style={{ flex: 1,justifyContent: 'center',alignItems:'center', }}
          >
            {/* <ScrollView
            keyboardShouldPersistTaps={"always"}
            style={{ backgroundColor: "red",}}
          > */}
            <View
              style={{
                 width: wp("95%"), 
                flex: 1,
                alignItems: "center",
                height: hp("86%"),
              }}
            >
              <ScrollView>
                {responseData.length <= 0 ? (
                  <View>
                    <Text allowFontScaling={false} style={{ fontFamily: "soraRegular", fontSize: 20 }}>
                      No Record
                    </Text>
                  </View>
                ) : (
                  responseData.map((person, index) => {
                    //  console.log("View--------" + person);
                    //console.log("View--------" + person.starttime);
                    return (
                      <View
                        key={index}
                        style={{
                          flex:1,
                          //height:80,
                           borderBottomWidth: 2,
                          borderColor: "#F1F3FF",
                         marginTop:10
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ width: "20%", height: 80,paddingTop:4 }}>
                            <View style={{}}>
                              <Text allowFontScaling={false} style={{ fontSize: wp("4%"), }}>
                                {person.starttime}
                              </Text>
                            </View>
                          </View>
                          <View
                            style={{
                              width: "72%",
                              height: 80,
                              // justifyContent: "center",
                              // backgroundColor:'pink'
                            }}
                          >
                            <View  style={{ flexDirection: "column" }}>
                              <View>
                                <Text allowFontScaling={false}
                                  style={{ fontSize: 20, fontWeight: "bold" }}
                                >
                                  {person.fullname}
                                </Text>
                              </View>
                              <View>
                                <Text  allowFontScaling={false} style={{ color: "grey", fontSize: 15 }}>
                                  {person.gender == "Male" ? "M" : "F"} |{" "}
                                  {person.dateofbirth + " "} |{" "}
                                  {" " + person.age}
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <View>
                                  <Text allowFontScaling={false} style={{ color: "grey", fontSize: 15 }}>
                                    Consultation
                                  </Text>
                                </View>
                                {person.statuscode == "booked" ? (
                                  <View
                                    style={{
                                      backgroundColor: "#55A761",
                                      width: 80,
                                      alignItems: "center",
                                      borderRadius: 5,
                                    }}
                                  >
                                    <Text allowFontScaling={false}
                                      style={{
                                        color: "grey",
                                        fontSize: 15,
                                        color: "#fff",
                                      }}
                                    >
                                      {person.statuscode}
                                    </Text>
                                  </View>
                                ) : null}
                              </View>
                            </View>
                          </View>
                          <View
                            style={{
                              width: "8%",
                              height: 80,
                              justifyContent: "center",
                            }}
                          >
                            <TouchableOpacity
                              onPress={() => {
                               
                                setCurrentPatient(person)
                               
                                setVisible(!visible)
                              }}
                            >
                              <View style={{ alignItems: "center" }}>
                                <Image
                                  resizeMode="contain"
                                  style={{ justifyContent: "center" }}
                                  source={require("../assets/Group_41.png")}
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    );
                  })
                )}
              </ScrollView>
            </View>
            {/* </ScrollView> */}
          </View>
        )}

        {/*  */}

        <BottomSheetApp
          Id={clickedId}
          visible={visible}
          closeHandler={closeHandler}
          navigationHandler= {
           navigateToAppointmentView}
          currentPatient={currentPatient}
        />

        {/*  */}
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    backgroundColor: "#fff",
  },
});
