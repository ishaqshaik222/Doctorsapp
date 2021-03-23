import React from "react";
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
function AppointmentView(props) {
  const apiUrl = APIURl;
  console.log("***************************", props.route.params.appointmentid);
  console.log("***************************", APIURl);
  const [checked, setChecked] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [respData, setRespPatientData] = React.useState([]);
  const [respAppointmentData, setRespAppointmentData] = React.useState([]);
  React.useEffect(() => {
    let unmounted = false;
    var bodyFormData = new FormData();
    var username = "smilesadmin@gmail.com";
    var password = "smilesadmin";
    const authHeader = "Basic " + base64.encode(`${username}:${password}`);
    // bodyFormData.append("startdate", selectedDate);
    // bodyFormData.append("enddate", nextDay);
    // bodyFormData.append("status", "-1");
    // bodyFormData.append("practitioner", "-1");
    setIsLoading(true);
    axios
      .get(
        apiUrl +
          "appointments/show/" +
          props.route.params.appointmentid +
          "/" +
          props.route.params.patientid,
        {
          headers: { Authorization: authHeader },
        }
      )
      .then(
        (result) => {
          setRespPatientData(result.data.patientdetails);
          setRespAppointmentData(result.data.appointmentdetails);
          setIsLoading(false);
          console.log(respData);
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setRespData([]);
          setIsLoading(false);
        }
      );
    //console.log("will mount" + moment().format("DD/MM/YYYYY"));
    //console.log("asdfasdf"+moment().format('DD/MM/YYYYY'))
    return () => {
      unmounted = true;
    };
  }, []);

  const closeHandler = () => {
    setVisible(!visible);
  };

  const AppointmentViewList = (props) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: wp("90%"),
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#EAEAEA",
            height: hp("6%"),
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 15, color: "grey" }}>{props.setkey}</Text>
          </View>

          {/* Only text */}
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{props.value}</Text>
          </View>
        </View>
      </View>
    );
  };
  const AppointmentViewBannerList = (props) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center"}}>
        <View
          style={{
            width: wp("90%"),
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#EAEAEA",
            height: hp("6%"),
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 15, color: "grey" }}>{props.setkey}</Text>
          </View>

          {/* BackGroundColorGreen key =2 */}
          <View style={{ justifyContent: "center" }}>
            <View
              style={{
                backgroundColor: "#55A761",
                width: wp("25%"),
                borderRadius: 5,
              }}
            >
              <Text style={{ alignSelf: "center", justifyContent: "center",color:'white' }}>
                {props.value}
              </Text>
            </View>
          </View>

          {/* CheckBox key=3 */}
        </View>
      </View>
    );
  };
  const AppointmentViewCheckList = (props) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: wp("90%"),
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#EAEAEA",
            height: hp("6%"),
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 15, color: "grey" }}>{props.setkey}</Text>
          </View>

          {/* CheckBox key=3 */}

          <View style={{ justifyContent: "center" }}>
            <Checkbox
              color="#28318C"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {isLoading ? (
        <Overlay isVisible={true}>
          <ActivityIndicator
            animating={true}
            color={Colors.blueA100}
            style={{ justifyContent: "center", alignItems: "center" }}
          />
        </Overlay>
      ) : (
        <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:'white'}}>
          <View
            style={{
              flexDirection: "row",
              //height: hp("10%"),
              borderBottomWidth: 1,
              borderBottomColor: "#F0F2FF",
              backgroundColor:'#fff'
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 2,
                    width: wp("15%"),
                    height: wp("15%"),
                    borderRadius: wp("60%"),
                    justifyContent: "center",
                    alignContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{ width: wp("15%"), height: wp("15%") }}
                    source={require("../assets/EMS_Usericon.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 3.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  shouldAllowFontScaling={false}
                  style={{
                    fontSize: 20,
                    fontFamily: "sorafont",
                    fontWeight: "bold",
                  }}
                >
                  {respData.firstname + " " + respData.lastname}
                </Text>
              </View>
              <View style={{ flex: 0.5, justifyContent: "center" }}>
                <Image
                  resizeMode="contain"
                  style={{ justifyContent: "center" }}
                  source={require("../assets/Group_41.png")}
                />
              </View>
            </View>
          </View>
          <View>
            <AppointmentViewList
              setkey="Start Time"
              value={respAppointmentData.appointmenttime}
            />
            <AppointmentViewList
              setkey="Operatory"
              value={respAppointmentData.hyginist}
            />
            <AppointmentViewBannerList
              setkey="Status"
              value={respAppointmentData.status}
            />
            <AppointmentViewCheckList setkey="ASAP" value={true} />
            <AppointmentViewList setkey="Confirmed" value={respData.ssn} />
            <AppointmentViewList
              setkey="Provider"
              value={respData.carriername}
            />
            <AppointmentViewList
              setkey="Hyginest"
              value={respAppointmentData.hyginist}
            />
            <AppointmentViewList
              setkey="Duration"
              value={respAppointmentData.appointmenttime}
            />
            <AppointmentViewList
              setkey="Asked To Arrive"
              value={respAppointmentData.appointmenttime}
            />
            <AppointmentViewList
              setkey="Appointment Type"
              value={respData.carriername}
            />
            <AppointmentViewList
              setkey="Procedure Descriptions"
              value={respData.carriername}
            />
            <AppointmentViewList setkey="Lab" value={respData.carriername} />
            <AppointmentViewList setkey="Notes" value={respData.carriername} />
            <AppointmentViewList
              setkey="Time Seated"
              value={respData.carriername}
            />
            <AppointmentViewList
              setkey="Time Dismissed"
              value={respData.carriername}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default AppointmentView;
