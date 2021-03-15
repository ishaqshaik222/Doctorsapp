import React from 'react';
import { StyleSheet, Text, View ,Platform,StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import StartScreen from './Screens/StartScreen';
export default function App() {
  const [hideText, setHideText] = React.useState(false);
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
