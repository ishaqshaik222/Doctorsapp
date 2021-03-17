import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { TextInput } from 'react-native-paper';
export default function Login({navigation}) {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <ScrollView keyboardShouldPersistTaps={'always'} style={{ backgroundColor: "#28318c" }} >

            <View style={styles.container}>
                <View style={styles.loginLogo}>

                    <View style={{ justifyContent: 'flex-end', marginLeft: 50 }}>
                        <Image resizeMode='contain' style={styles.logo} source={require('../assets/GroupLogo1.png')} />
                    </View>
                </View>
                <View style={{ flex: 1, width: wp('80%'), height: hp('30%'), justifyContent: 'center' }}>
                    <View style={{}}>
                        <TextInput
                            label="Username"
                            value={userName}
                            onChangeText={userName => setUserName(userName)}
                            //underlineColorAndroid="transparent"
                            underlineColor='transparent'
                            theme={{ colors: { primary: 'white', placeholder: 'white', text: 'white' } }}
                            keyboardType='default'
                            style={{ backgroundColor: 'transparent', text: 'white' }}
                            underlineColor='#3c4384'
                        />
                    </View>
                    <View >
                        <TextInput
                            label="Password"
                            value={userName}
                            onChangeText={userName => setUserName(userName)}

                            underlineColor='transparent'
                            autoCapitalize='none'
                            style={{ backgroundColor: 'transparent' }}
                            theme={{ colors: { primary: 'white' ,placeholder: 'white', text: 'white' ,fontFamily:'soraRegular'} }}
                            underlineColor='#3c4384'

                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TouchableOpacity activeOpacity={0.6} 
                         onPress={() => {
                             navigation.navigate("Dashboard");
                           
                         }} >
                            <View style={{ alignItems: 'center', width: wp('80%'),height:hp('5%'), backgroundColor: '#27bef0', borderRadius: 10,justifyContent:'center' }}>
                                <Text style={{ fontSize:20,  textAlign: 'center', color: 'white' ,fontFamily:'soraRegular'}}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>
            <View style={{flex:1, height:hp('25%'),justifyContent:"flex-end",}}>
                    <View style={{width:250,marginLeft:45}}>
                    <Text style={{color:'white',fontSize:20}}>Forgot Password?</Text>
                    </View>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flex: 1,
        backgroundColor: '#28318c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginLogo: {

        // backgroundColor:'red',
        height: hp('40%'), width: wp('100%'),
        justifyContent: 'flex-end',
        alignSelf: 'center'
    }, logo: {
        //backgroundColor:'red',
        width: "40%",
        // height: "100%",
        //transform: [{ scale:2.0}],

    },
});
