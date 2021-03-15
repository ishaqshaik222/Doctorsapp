import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View,Image, TouchableOpacity, Dimensions,ScrollView} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import axios from 'axios';
import moment from "moment";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Appointment extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedDate:  moment().format(),
    };
  }

  getTodaysAppointment(){
    //alert("hi")
  }

  componentDidMount  (){
    console.log("asdfasdf"+moment().format('DD/MM/YYYYY'))
  }
  

  componentDidUpdate(){

  }

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
        <View style={{height:hp('13%'),borderBottomWidth: 1,}}> 
          <CalendarStrip
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{ type: 'border', duration: 200, }}
            style={{ height: 100, paddingTop: 10, paddingBottom: 5 }}
            calendarHeaderStyle={{ color: 'black' }}
            calendarColor={'#fff'}
            dateNumberStyle={{ color: 'black' }}
            dateNameStyle={{ color: 'grey' }}
            highlightDateNumberStyle={{ color: 'black' }}
            highlightDateNameStyle={{ color: 'black' }}
            disabledDateNameStyle={{ color: 'grey' }}
            disabledDateNumberStyle={{ color: 'grey' }}
            highlightDateContainerStyle={{ backgroundColor: 'orange' }}
            scrollable={true}
            dateContainerStyle={true}
            showMonth={true}
            showDayName={true}
            // datesWhitelist={datesWhitelist}

            // datesBlacklist={datesBlacklist}
            // iconLeft={require('./img/left-arrow.png')}
            // iconRight={require('./img/right-arrow.png')}
            iconContainer={{ flex: 0.1 }}
            
          />
        </View>
        <ScrollView keyboardShouldPersistTaps={'always'} style={{ backgroundColor: "#fff" }} >
        <View style={{height:hp('87%'), width:wp('100%'),backgroundColor:'red'}}>
            <View style={{height:80,backgroundColor:'yellow'}}> 
                <View style={{flexDirection:'row'}}> 
                    <View style={{width:'20%', height:80,backgroundColor:'green'}}>
                        <View style={{backgroundColor:'pink'}}> 
                            <Text style={{fontSize:20}}>10:56am</Text>
                        </View>
                    </View>
                     <View style={{width:'72%', height:80,backgroundColor:'blue'}}>
                        <View style={{flexDirection:'column'}}>
                              <View>
                                <Text style={{fontSize:25,fontWeight:'bold'}}>Sitaraman narayna</Text>
                              </View>
                              <View>
                                <Text style={{color:'grey',fontSize:15}}>M | 03/03/2021 |34 Years
                                </Text>
                              </View>
                              <View>
                                <Text style={{color:'grey',fontSize:15}}>Consultation
                                </Text>
                              </View>
                        </View>

                    </View>
                    <View style={{width:'8%', height:80,backgroundColor:'orange',justifyContent:'center',}}>
                      <View style={{alignItems:'center'}}>
                      <Image resizeMode='contain' style={{justifyContent:'center'}} source={require('../assets/Group_41.png')} />
                      </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    backgroundColor: '#fff',
    
  },
});