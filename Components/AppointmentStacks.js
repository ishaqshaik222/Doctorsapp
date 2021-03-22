import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Appointment from '../Screens/Appoitments'
import AppointmentView from '../Screens/AppointmentView'
import {AppointmentViewContext} from '../Components/CommonContext'
function AppointmentStacks(props) {
  
    const AppointmentStack = createStackNavigator();

    const navigateToAPD=()=>{
      alert('text')
    }
    return (

        <AppointmentStack.Navigator screenOptions={{ headerTitleAlign: "center",headerRight:()=>{return(
 
            <Text style={{backgroundColor:'#FA7366',width:30,height:30,textAlign:'center',textAlignVertical:'center',borderRadius:15,right:20,fontWeight:'bold',color:'white'}}>10</Text>
       
        )} }}>
          <AppointmentStack.Screen
            name="Appointment"
            component={Appointment}
            options={{ title: "Appointment", headerShown: false, headerStyle: null }}
          />
          <AppointmentStack.Screen
            name="AppointmentDetails"
            component={AppointmentView}
            options={{ title: "Appointment Details", headerShown: false, headerStyle: null }}
          />
         
          
        </AppointmentStack.Navigator>
       
    );
}

export default AppointmentStacks;