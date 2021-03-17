import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,Button
} from "react-native";
// import CalendarStrip from "react-native-calendar-strip";
//import CalendarStrip from 'react-native-slideable-calendar-strip';

import CalendarStrip from '../Components/CalendarStrip'
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
import BottomSheetApp  from '../Components/BottomSheet'
import {UserContext ,BottomHeaderContext} from '../Components/CommonContext';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Overlay } from 'react-native-elements';
export default class Appointment extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment(new Date()).format("YYYY-MM-DD"),
      nextDay:moment(new Date()).add(1, "day").format("YYYY-MM-DD"),
      responseData: [],
      visible:false,
      clickedId: 0,
      currentPatient:{},
      isLoading:false,
    };
   
  }



 
  getTodaysAppointment(currentDate,nextDate) {
   // alert("getTodaysAppointmentCalled")
   console.log("currentDate-----" + currentDate)
   console.log("nextDate-----" + nextDate)
    var bodyFormData = new FormData();
    var username = "smilesadmin@gmail.com";
    var password = "smilesadmin";
    const authHeader = "Basic " + base64.encode(`${username}:${password}`);
    bodyFormData.append("startdate", currentDate);
    bodyFormData.append("enddate",nextDate);
    bodyFormData.append("status", "-1");
    bodyFormData.append("practitioner", "-1");
    this.setState({isLoading:true})
    axios
      .post("https://mobileapp.doctor/api/v1/appointments/all", bodyFormData, {
        headers: { Authorization: authHeader },
      })
      .then(
        (result) => {
          this.setState({
            responseData: result.data,
          isLoading:false,
          });
          //console.log(this.state.responseData.length)
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            responseData: [],
          });
        }
      );
    //console.log("will getTodaysAppointment" + moment().format("DD/MM/YYYYY"));
      

  }

  componentDidMount() {
    
    var bodyFormData = new FormData();
    var username = "smilesadmin@gmail.com";
    var password = "smilesadmin";
    const authHeader = "Basic " + base64.encode(`${username}:${password}`);
    bodyFormData.append("startdate", this.state.selectedDate);
    bodyFormData.append("enddate",this.state.nextDay);
    bodyFormData.append("status", "-1");
    bodyFormData.append("practitioner", "-1");
    this.setState({isLoading:true})
    axios
      .post("https://mobileapp.doctor/api/v1/appointments/all", bodyFormData, {
        headers: { Authorization: authHeader },
      })
      .then(
        (result) => {
          this.setState({
            responseData: result.data,
            isLoading:false,
          });
          //console.log(this.state.responseData)
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            responseData: [],
            isLoading:false,
          });
        }
      );
    //console.log("will mount" + moment().format("DD/MM/YYYYY"));
    //console.log("asdfasdf"+moment().format('DD/MM/YYYYY'))
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  closeHandler = ()=>{
    this.setState({visible:!this.state.visible});
  }
//  toggleBottomNavigationView = () => {
//     //Toggling the visibility state of the bottom sheet
//     this.setState({visible:true});
//   };

  render() {
    return (
      <View style={styles.container}>
        {/*  */}
        <View
          style={{
            height: hp("13%"),
            borderBottomWidth: 1,
            borderColor: "#F1F3FF",
            justifyContent: "space-around",
          }}
        >
          <CalendarStrip
            selectedDate={this.state.selectedDate}
            onPressDate={(date) => {
             // alert(moment(date).format("YYYY-MM-DD"))
              this.setState({
                selectedDate: moment(date).format("YYYY-MM-DD"),
                nextDay: moment(new Date(date))
                .add(1, "day")
                .format("YYYY-MM-DD"),
              });
             console.log("---------------------" + moment(date).format("YYYY-MM-DD") +"+==============="+ moment(new Date(date)).add(1, "day").format("YYYY-MM-DD"))
              this.getTodaysAppointment(moment(date).format("YYYY-MM-DD"),moment(new Date(date))
              .add(1, "day")
              .format("YYYY-MM-DD"));
            }}
            onPressGoToday={(today) => {
              this.setState({ selectedDate: today });
            }}
            // onSwipeDown={() => {
            //   alert('onSwipeDown');
            // }}
            markedDate={[]}
            weekStartsOn={1} // 0, 1,2,3,4,5,6 for S M T W T F S, defaults to 0
          />
         
        </View>
        {this.state.isLoading ? (
        <Overlay isVisible={true} >
            <ActivityIndicator animating={true} color={Colors.blueA100} style={{justifyContent:'center',alignItems:'center'}}/>
            </Overlay>
          ) : (
            <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ScrollView
            keyboardShouldPersistTaps={"always"}
            style={{ backgroundColor: "#fff" }}
          >
            <View style={{ width: wp("95%"), flex: 1, alignItems: "center" }}>
              {this.state.responseData.length <= 0 ? (
                <View>
                  <Text style={{ fontFamily: "soraRegular", fontSize: 20 }}>
                    No Record
                  </Text>
                </View>
              ) : (
                this.state.responseData.map((person, index) => {
                //  console.log("View--------" + person);
                  //console.log("View--------" + person.starttime);
                  return (
                    <View
                      key={index}
                      style={{
                        height: 80,
                        borderBottomWidth: 2,
                        borderColor: "#F1F3FF",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{ width: "20%", height: 80, paddingTop: 13 }}
                        >
                          <View style={{}}>
                            <Text style={{ fontSize: 20 }}>
                              {person.starttime}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            width: "72%",
                            height: 80,
                            justifyContent: "center",
                          }}
                        >
                          <View style={{ flexDirection: "column" }}>
                            <View>
                              <Text
                                style={{ fontSize: 20, fontWeight: "bold" }}
                              >
                                {person.fullname}
                              </Text>
                            </View>
                            <View>
                              <Text style={{ color: "grey", fontSize: 15 }}>
                                {person.gender == "Male" ? "M" : "F"} |{" "}
                                {person.dateofbirth + " "} | {" " + person.age}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <View>
                                <Text style={{ color: "grey", fontSize: 15 }}>
                                  Consultation
                                </Text>
                              </View>
                              {person.statuscode == "booked" ? (
                                <View
                                  style={{
                                    backgroundColor: "#55A761",
                                    width: 80,
                                    alignItems: "center",
                                    borderRadius:5,
                                  }}
                                >
                                  <Text
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
                              this.setState({ currentPatient: person });
                              this.setState({ visible: !this.state.visible });
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
            </View>
          </ScrollView>
        </View>
          )}
       
        {/*  */}

        <BottomSheetApp
          Id={this.state.clickedId}
          visible={this.state.visible}
          closeHandler={this.closeHandler}
          currentPatient={this.state.currentPatient}
        />

        {/*  */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    backgroundColor: "#fff",
  },
 
});
