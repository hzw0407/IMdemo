import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HeaderTitle } from 'react-navigation-stack';

export default class Mine extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        title:navigation.state.params?navigation.state.params.headerTitle:'我的',
        gestureResponseDistance:{horizontal:300},
    });
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>我的123</Text>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    text:{
        fontSize:26
    }
})