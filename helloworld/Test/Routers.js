
import React,{Component} from 'react';
import {createAppContainer, NavigationEvents} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator,createMaterialTopTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "react-native-vector-icons/Ionicons"
import{Image,TouchableOpacity,Text, Alert} from 'react-native'

import Home from './Home';
import Detail from './Detail'
import Mine from './Mine'
import Right from './Right'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';

// const topBar = createMaterialBottomTabNavigator({
//     Home: {
//         screen:Home,
//         navigationOptions:{
//             tabBarLabel:'首页'
//         }
//     },
//     Mine:{
//         screen:Mine,
//         navigationOptions:{
//             tabBarLabel:'我的'
//         }
//     }
// });

// const bottomBar = createBottomTabNavigator({
//     首页:{
//         screen:Home,
//         navigationOptions:{
//             //只会设置导航栏文字
//             headerTitle:'首页',
//             tabBarLabel:'首页',
//             headerStyle:{
//                 backgroundColor:'#4ECBFC'
//             }, 
//             // 设置导航条的样式。如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是。
//             headerTitleStyle:{
//                 fontSize:30,
//                 color:'white'
//             }, 
//             //设置导航条文字样式。安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
//             gesturesEnabled:true, // 是否支持滑动返回收拾，iOS默认支持，安卓默认关闭
//             //设置tabbar图标
//             tabBarIcon: ({focused, horizontal, tintColor}) => (
//                 <Image source={require('../Test/Images/帽子.png')}
//                                   style={{width: 22, height: 22, tintColor: tintColor}}/>
//             )
//         }
//     },
//     我的: {
//         screen: Mine,
//         navigationOptions:{
//             headerTitle:'意见反馈',
//             tabBarLabel:'我的',
//             tabBarIcon: ({focused, horizontal, tintColor}) => (
//                 <Image source={require('../Test/Images/小黄鸭.png')}
//                                   style={{width: 22, height: 22, tintColor: tintColor}}/>
//             )
//         }
//     },
// },{
//     tabBarComponent:bottomBar,
//     tabBarPosition: "bottom", //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
//     swipeEnabled: true, //是否允许在标签之间滑动
//     animationEnabled: false, //是否在更改标签时显示动画
//     lazy: true, //是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true
//     tabBarOptions: {
//         activeTintColor: "#ff552e", //label和icon的前景色 活跃状态下（选中）
//         inactiveTintColor: "#333", //label和icon的前景色 不活跃状态下
//         showLabel: true, //是否显示label，默认开启
//         showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
//         style: { backgroundColor: "#ffffff" }, //tabbar的样式
//         labelStyle: {
//             fontSize: 14 // 文字大小
//         }
//     }
// });

const bottomBar = createBottomTabNavigator({
    Home:createStackNavigator({
        Home:{screen:Home},
        Detail:{screen:Detail},
        Right:{screen:Right},
    },{
        navigationOptions:({navigation}) => {
            return {
                tabBarLabel:'首页',
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <Image source={require('../Test/Images/帽子.png')}
                                      style={{width: 22, height: 22, tintColor: tintColor}}/>
                ),
                //当在首页进行跳转时 隐藏tabbar
                tabBarVisible:navigation.state.index === 0,
              };
        },
        //边缘滑动返回上级页面时动画效果
        headerMode:'float',
        //定义跳转风格
        mode:'card',
        // navigationOptions:{
        //     // headerTitle:'首页',
        //     tabBarLabel:'首页',
        // //     headerRight:<TouchableOpacity onPress = {()=> navigation.navigate("Right")}>
        // //           <Text> 跳转</Text>
        // //   </TouchableOpacity>,
        //     tabBarIcon: ({focused, horizontal, tintColor}) => (
        //         <Image source={require('../Test/Images/帽子.png')}
        //                           style={{width: 22, height: 22, tintColor: tintColor}}/>
        //     )
        // },
    }),
    Mine:createStackNavigator({
        Mine:{screen:Mine},
    },{
        navigationOptions:({navigation}) => {
            return {
                tabBarLabel:'我的',
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <Image source={require('../Test/Images/小黄鸭.png')}
                                      style={{width: 22, height: 22, tintColor: tintColor}}/>
                ),
                //当在我的进行跳转时 隐藏tabbar
                tabBarVisible:navigation.state.index === 0,
              };
        },
        headerMode:'float',
        mode:'card',
        // navigationOptions:{
        //     // headerTitle:'我的',
        //     tabBarLabel:'我的',
        //     tabBarIcon: ({focused, horizontal, tintColor}) => (
        //         <Image source={require('../Test/Images/小黄鸭.png')}
        //                           style={{width: 22, height: 22, tintColor: tintColor}}/>
        //     )
        // }
    })
},{
    tabBarPosition: "bottom", //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
    swipeEnabled: true, //是否允许在标签之间滑动
    animationEnabled: false, //是否在更改标签时显示动画
    lazy: true, //是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true
    tabBarOptions: {
        activeTintColor: "#ff6347", //label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: "#333", //label和icon的前景色 不活跃状态下
        showLabel: true, //是否显示label，默认开启
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        style: { backgroundColor: "#ffffff" }, //tabbar的样式
        labelStyle: {
            fontSize: 14 // 文字大小
        }
    },
});

const AppNavigator=createStackNavigator({
    bottomBar:{
        screen:bottomBar,
    },
    Detail: {
        screen:Detail
    },
    Right:{
        screen:Right
    }
});

const AppContainer = createAppContainer(bottomBar)
export default AppContainer;

