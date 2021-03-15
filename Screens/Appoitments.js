import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import axios from "axios";
import moment from "moment";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import base64 from "react-native-base64";
export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
      responseData: [],
    };
  }

  getTodaysAppointment() {}

  componentDidMount() {
    var bodyFormData = new FormData();
    var username = "smilesadmin@gmail.com";
    var password = "smilesadmin";
    const authHeader = "Basic " + base64.encode(`${username}:${password}`);
    bodyFormData.append("startdate", "2021-03-10");
    bodyFormData.append("enddate", "2021-03-11");
    bodyFormData.append("status", "-1");
    bodyFormData.append("practitioner", "-1");
    axios
      .post("https://mobileapp.doctor/api/v1/appointments/all", bodyFormData, {
        headers: { Authorization: authHeader },
      })
      .then(
        (result) => {
          this.setState({
            responseData: result.data,
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
          });
        }
      );
    console.log("will mount" + moment().format("DD/MM/YYYYY"));
    //console.log("asdfasdf"+moment().format('DD/MM/YYYYY'))
  }

  componentDidUpdate() {
    //   var bodyFormData = new FormData();
    //   var username = 'smilesadmin@gmail.com';
    //   var password = 'smilesadmin';
    //   const authHeader = 'Basic ' + base64.encode(`${username}:${password}`);
    //   bodyFormData.append('startdate', '2021-03-10');
    //   bodyFormData.append('enddate', '2021-03-11');
    //   bodyFormData.append('status', '-1');
    //   bodyFormData.append('practitioner', '-1');
    //    axios.post("https://mobileapp.doctor/api/v1/appointments/all",bodyFormData, {
    //     headers: { 'Authorization': authHeader }
    //   }) .then((result) => {
    //     this.setState({
    //       responseData: result.data
    //     }
    //     );
    //   console.log(this.state.responseData)
    //   },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         responseData: []
    //       });
    //   });
    // console.log("will update"+moment().format('DD/MM/YYYYY'))
  }
  LapsList = () => {
    console.log(this.state.responseData);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <CalendarStrip
          selectedDate={this.state.selectedDate}
          onPressDate={(date) => {
            this.setState({ selectedDate: date });
            this.getTodaysAppointment()
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
        <View
          style={{
            height: hp("13%"),
            borderBottomWidth: 1,
            borderColor: "#F1F3FF",
          }}
        >
          <CalendarStrip
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={{ type: "border", duration: 200 }}
            style={{ height: 100, paddingTop: 10, paddingBottom: 5 }}
            calendarHeaderStyle={{ color: "black" }}
            calendarColor={"#fff"}
            dateNumberStyle={{ color: "black" }}
            dateNameStyle={{ color: "grey" }}
            highlightDateNumberStyle={{ color: "black" }}
            highlightDateNameStyle={{ color: "black" }}
            disabledDateNameStyle={{ color: "grey" }}
            disabledDateNumberStyle={{ color: "grey" }}
            highlightDateContainerStyle={{ backgroundColor: "orange" }}
            scrollable={true}
            dateContainerStyle={true}
            showMonth={true}
            showDayName={true}
            selectedDate={moment()}
            // datesWhitelist={datesWhitelist}

            // datesBlacklist={datesBlacklist}
            // iconLeft={require('./img/left-arrow.png')}
            // iconRight={require('./img/right-arrow.png')}
            iconContainer={{ flex: 0.1 }}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ScrollView
            keyboardShouldPersistTaps={"always"}
            style={{ backgroundColor: "#fff" }}
          >
            <View style={{ width: wp("95%"), flex: 1 ,alignItems:'center'}}>
              {this.state.responseData.map((person, index) => {
                console.log("View--------" + person);
                console.log("View--------" + person.starttime);
                return (
                  <View
                    style={{
                      height: 80,
                      borderBottomWidth: 2,
                      borderColor: "#F1F3FF",
                     
                    }}
                  >
                    <View style={{ flexDirection: "row", }}>
                      <View style={{ width: "20%", height: 80 ,paddingTop:13}}>
                        <View style={{}}>
                          <Text style={{ fontSize: 20 }}>
                            {person.starttime}
                          </Text>
                        </View>
                      </View>
                      <View style={{ width: "72%", height: 80,justifyContent:'center' }}>
                        <View style={{ flexDirection: "column" }}>
                          <View>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                              {person.fullname}
                            </Text>
                          </View>
                          <View>
                            <Text style={{ color: "grey", fontSize: 15 }}>
                              {person.gender == "Male" ? "M" : "F"} | {" "}
                              {person.dateofbirth+" "} | {" "+person.age}
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
                        <View style={{ alignItems: "center" }}>
                          <Image
                            resizeMode="contain"
                            style={{ justifyContent: "center" }}
                            source={require("../assets/Group_41.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
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
