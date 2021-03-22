import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Fragment,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
export default function Dashboard({ navigation }) {
  const Badge = ({ count }) => {
    return count > 0 ? (
      <View
        style={{ ...styles.circle, position: "relative", top: 10, left: 20 }}
      >
        <Text allowFontScaling={false} style={styles.count}>{count >= 100 ? "99+" : count}</Text>
      </View>
    ) : (
      <View
        style={{
          ...styles.circle,
          backgroundColor: "transparent",
          position: "relative",
          top: 20,
          left: 20,
        }}
      ></View>
    );
  };

  const executeScreenFn = (screenOpt) => {
    navigation.navigate;
    navigation.navigate("BottomTabs", { screen: screenOpt, name: "screenOpt" });
  };
  const Item = (props) => {
    // imageSource= require("../assets/"+props.iconName+".png")
    // imagesrc = require(props.iconName)
    return (
      <TouchableOpacity   onPress={()=>{
        ///alert(props.Name)
        switch(props.Name){
            
            case  "Appointments"  :
                
                executeScreenFn("Appoitment")
            break;
            case  "Patients"  :
                executeScreenFn("Patients")
            break;
            case  "Messages"  :
                executeScreenFn("Messages")
            break;
            case  "TeamChat"  :
                executeScreenFn("Teamchat")
            break;
           
        }
       
    }}>
        <View
          style={{
            width: wp("33.333%"),
            height: hp("50%") / 3,
            // backgroundColor: "yellow",
            // borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge count={props.Count}  allowFontScaling={false}/>
          <Image resizeMode="contain" source={props.iconName} />
          <Text allowFontScaling={false} style={{ marginTop: 10 }}>{props.Name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: hp("30%"),
          backgroundColor: "#28318c",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            borderWidth: 1,
            borderColor: "#279dd8",
            justifyContent: "center",
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../assets/EMS_Usericon.png")}
          />
        </View>
        <View  style={{ alignItems: "center", marginTop: 20 }}>
          <Text allowFontScaling={false} style={{ color: "white", fontSize: 22 }}>
            Hi INAYA ISHAQ SHAIK
          </Text>
          <Text allowFontScaling={false} style={{ color: "#279dd8", fontSize: 18 }}>
            Smile centers Dentist
          </Text>
        </View>
      </View>

      {/* 2nd half */}
      <View
        style={{
        
          height: hp("50%"),
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Item
          Name="Appointments"
          iconName={require("../assets/fi-rr-calendar.png")}
          Count="100"
        />
        <Item
          Name="Patients"
          iconName={require("../assets/patient_icon.png")}
          Count="1"
        />
        <Item
          Name="Messages"
          iconName={require("../assets/fi-rr-comment-alt.png")}
          Count="1"
        />
        <Item
          Name="TeamChat"
          iconName={require("../assets/fi-rr-comment.png")}
          Count="1"
        />
        <Item
          Name="Reviews"
          iconName={require("../assets/Group2.png")}
          Count="1"
        />
        <Item
          Name="Analytics"
          iconName={require("../assets/fi-rr-stats.png")}
          Count="1"
        />
        <Item Name="eRx" iconName={require("../assets/Group4.png")} Count="0" />
        <Item
          Name="Pharmacy"
          iconName={require("../assets/Group5.png")}
          Count="0"
        />
        <Item
          Name="Settings"
          iconName={require("../assets/fi-rr-settings.png")}
          Count="0"
        />
      </View>
      {/* <View style={{ height: hp('30%') }}>
              <View style={{flex:1, flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-around',alignItems: 'stretch' }}>
              
              <Item Name='Appointments' iconName={require("../assets/fi-rr-calendar.png")} Count="100"
              
              />
              <Item Name='Patients' iconName={require("../assets/patient_icon.png")} Count="1"/>
              <Item Name='Messages' iconName={require("../assets/fi-rr-comment-alt.png")} Count="1"/>
              </View>
              <View style={{flex:1, flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-around',alignItems: 'stretch' }}>

              <Item Name='TeamChat' iconName={require("../assets/fi-rr-comment.png")} Count="1"/>
              <Item Name='Reviews' iconName={require("../assets/Group2.png")} Count="1"/>
              <Item Name='Analytics' iconName={require("../assets/fi-rr-stats.png")} Count="1"/>
              </View>
              <View style={{flex:1, flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-around',alignItems: 'stretch' }}>

              <Item Name='eRx' iconName={require("../assets/Group4.png")} Count="0"/>
              <Item Name='Pharmacy' iconName={require("../assets/Group5.png")} Count="0"/>
              <Item Name='Settings' iconName={require("../assets/fi-rr-settings.png")} Count="0"/>
              </View>
          </View> */}
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <View style={{ width: 120, height: 100, backgroundColor: 'red' }}>
                      <Text>HI</Text>
                  </View>
                  <View style={{ width: 120, height: 100, backgroundColor: 'orange' }}>
                      <Text>HI</Text>
                  </View>
                  <View style={{ width: 120, height: 100, backgroundColor: 'green' }}>
                      <Text>HI</Text>
                  </View>

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <View style={{ width: 120, height: 100, backgroundColor: 'red' }}>
                      <Text>HI</Text>
                  </View>
                  <View style={{ width: 120, height: 100, backgroundColor: 'orange' }}>
                      <Text>HI</Text>
                  </View>
                  <View style={{ width: 120, height: 100, backgroundColor: 'green' }}>
                      <Text>HI</Text>
                  </View>

              </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 90,
    height: 90,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14, //half radius will make it cirlce,
    backgroundColor: "#FA756A",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999999,
  },
  count: {
    color: "#FFF",
    fontFamily: "soraRegular",
    fontSize: 13,
    fontWeight: "bold",
  },
});
