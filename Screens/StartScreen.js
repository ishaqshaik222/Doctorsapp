// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect,useMemo } from 'react';
import { StyleSheet, Text, View,Platform,StatusBar,Image } from 'react-native';
import Login from './Login';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard'
import BottomTabs from '../Components/BottomDrawer';
import {AuthContext,UserContext} from '../Components/CommonContext';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Messages from './Messages';
import Patients from './Patients';
import Teamchat from './Teamchat';
import Appointment from './Appoitments'

export default function StartScreen() {
    const Tab = createMaterialBottomTabNavigator();
    const [userToken, SetUserToken] = useState(true);
    const Stack = createStackNavigator();
   
    // const theme = {
    //     ...DefaultTheme,
    //     roundness: 2,
    //     colors: {
    //       ...DefaultTheme.colors,
    //       primary: '#3498db',
    //       accent: '#f1c40f',
    //     },
    //   };
    const BottomTabs = () => {
        return (
          <Tab.Navigator
            initialRouteName="Appoitment"
            shifting={false}
            sceneAnimationEnabled={true}
            barStyle={{ backgroundColor: '#28318c' }}
          >
            <Tab.Screen
              name="Appoitment"
              title="Appointment"
              component={Appointment}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image style={{ height: 28,width:20 }}
                  resizeMode="contain" 
                    source={require('../assets/bottomNav/fi-rr-calendar.png')                  
                    }/>
               ), 
               tabBarLabel: 'Appoitment'  
               // tabBarVisible:true,
              }}
              
            />
            <Tab.Screen
              name="Messages"
              component={Messages}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image style={{ height: 28,width:20 }}
                  resizeMode="contain" 
                    source={require('../assets/bottomNav/fi-rr-comment-alt.png')                  
                    }/>
               ), 
               tabBarLabel: 'Messages'  
                
              }}
            />
            <Tab.Screen
              name="Patients"
              component={Patients}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image style={{ height: 28,width:20 }}
                  resizeMode="contain" 
                    source={require('../assets/bottomNav/fi-rr-stop.png')                  
                    }/>
               ), 
               tabBarLabel: 'Patients'  
              }}
            />
            <Tab.Screen
              name="TeamChat"
              component={Teamchat}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image style={{ height: 28,width:20 }}
                  resizeMode="contain" 
                    source={require('../assets/bottomNav/fi-rr-comment.png')                  
                    }/>
               ), 
               tabBarLabel: 'TeamChat'  
              }}
            />
            <Tab.Screen
              name="More"
              component={Teamchat}
              options={{
                tabBarIcon: ({ color }) => (
                  <Image style={{ height: 28,width:20 }}
                  resizeMode="contain" 
                    source={require('../assets/bottomNav/fi-rr-calendar.png')                  
                    }/>
               ), 
               tabBarLabel: 'More'  
              }}
            />
          </Tab.Navigator>
        );
      };

    const authContext = React.useMemo(
        () => ({
        
          signIn: (userData) => {
            // setIsloading(true);
            // debugger
                 
            //         let isMounted = true; 
            //       axios.get(urlLink+"/iilapi/Login?Username="+userData.email+"&Password="+userData.password)
            //       .then((response) => {
            //         //
            //         let stringifyJson =JSON.stringify(response.data.result)
    
            //         // alert(stringifyJson)
            //         SetUserToken(stringifyJson);
                  
            //         try {
            //           if (response.data.message == "Success") {
            //             debugger
            //             //AsyncStorage.setItem('user',JSON.stringify(response.data));  
            //             console.log("Sign in Login", response.data);
            //             dispatch({ type: "LOGIN", id: response.data.result.Employee.EmpId , token: response.data.result.Employee.EmpId });
            //             setIsloading(false);
                       
                       
            //           } else {
            //             //urlLink+"/iilapi/Login?Username="+loginForm.email+"&Password="+loginForm.password
            //             if (response.data.message == "Object cannot be cast from DBNull to other types.") {
            //               setIsloading(false);
            //               alert("invalid userid and password")
            //             } else {
            //               setIsloading(false);
            //             }
            //           }
            //         }
            //       catch(ex){
    
            //       }
                    
          
            //       })
            //       .catch((error) => {
            //         console.log("error occured")
            //         alert(error);
            //       });
                
          },
          SkipLogin:()=>{
            setSkipLogin(true)
          },
        }),
        []
      );
    const CreateMainStack = ({navigation}) => {
//    <PaperProvider theme={theme}>
return (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center",headerRight:()=>{return(
 
      <Text style={{backgroundColor:'#FA7366',width:30,height:30,textAlign:'center',textAlignVertical:'center',borderRadius:15,right:20,fontWeight:'bold',color:'white'}}>10</Text>
 
  )} }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ title: "Login", headerShown: false, headerStyle: null }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ title: "Dashboard", headerShown: false, headerStyle: null }}
    />
    <Stack.Screen
      name="BottomTabs"
      component={BottomTabs}
      options={{
        headerTintColor: "white",
        title: "APPOINTMENTS",
        headerShown: true,
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#28318c",
        },
      }}
        
    />
  </Stack.Navigator>
);
//   </PaperProvider>

}

  return (
    <AuthContext.Provider value={authContext}>
    {userToken != null ? (
      <UserContext.Provider value={userToken}>
        <NavigationContainer>
       
          <CreateMainStack/>
        </NavigationContainer>
      </UserContext.Provider>
    ) : (
      // <StatusBar style="inverted" backgroundColor='#00a0e3' />
      // <LoaderComponent />
         <Login />
     
    )}
  </AuthContext.Provider>
  )

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
