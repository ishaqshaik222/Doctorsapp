import React ,{useState}from 'react';
import { StyleSheet, Text, View ,Platform,StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import StartScreen from './Screens/StartScreen';
import * as Location from "expo-location";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset'
const fetchFonts = () => {
  return Font.loadAsync({
    'sorafont': require("./assets/Sora-VariableFont_wght.ttf"),
    'soraRegular': require("./assets/static/Sora-Regular.ttf"),
    'SoraSemiBold': require("./assets/static/Sora-SemiBold.ttf"),
  });
};
export default function App() {
  const [hideText, setHideText] = React.useState(false);
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    console.log("LOADED",loaded)
    console.log("FETCH FONTS",fetchFonts)
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setLoaded(true);
        }}
        onError={(err)=>{console.log(err)}}
      />
  }

  return (
    < >
    <StatusBar showHideTransition='fade' barStyle = "dark-content" hidden = {hideText} backgroundColor = "#28318c" translucent = {false}/>
    {/* <TouchableOpacity styles={{flex:1,justifyContent:'center'}} onPress={()=>setHideText(!hideText)}><Text >Hello</Text></TouchableOpacity> */}
    <StartScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
   
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
