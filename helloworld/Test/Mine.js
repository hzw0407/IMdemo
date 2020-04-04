import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image, 
    Alert,
FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HeaderTitle } from 'react-navigation-stack';
import {fetchRequest} from './NetworkRequest'

export default class Mine extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        title:navigation.state.params?navigation.state.params.headerTitle:'新闻列表',
        gestureResponseDistance:{horizontal:300},
    });

    constructor(props) {
        super(props);
        this.state = {
            //数据数组
            infoData: [],
        };
        this.getListInfo = this.getListInfo.bind(this);
    }

    componentDidMount() {
        this.getListInfo();
    }

    //获取新闻列表数据
    getListInfo() {
        fetchRequest('http://v.juhe.cn/toutiao/index?key=d8edd44350a7dcf5f54ce7fdbd7699b3&type=top','GET')
        .then(res => {
          //请求成功
          this.setState({
              infoData:this.state.infoData.concat(res.result.data),
          });
        }).catch(err => {
          //请求失败
          Alert.alert('请求失败');
        });
    }

    renderInfo({item}) {
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={{uri:item.thumbnail_pic_s}}></Image>
                <View style={styles.infoViewStyle}>
                   <Text style={styles.title}>{'标题:' + item.title}</Text>
                   <Text style={styles.authorStyle}>{'作者:' + item.author_name}</Text>
                   <View style={styles.dateViewStyle}>
                       <Text style={styles.dateStyle}>{'发布日期:' + item.date}</Text>
                   </View>
                </View>
            </View>
        );
    }

    render() {
        // return (
        //     <View style={styles.container}>
        //       <Text style={styles.text}>我的123</Text>
        //   </View>
        // )
        return (
            <FlatList
                data={this.state.infoData}
                renderItem={this.renderInfo}
                style={styles.list}
                keyExtractor={item => item.index}
            />
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f5f5f5"
    },
    imageStyle:{
        flex:1,
        justifyContent:"flex-start",
        marginLeft:10,
        marginBottom:10,
        height:150,
    },
    infoViewStyle:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        // alignItems:"flex-start",
        marginTop:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        backgroundColor:"#00ffff",
        height:150,
    },
    titleStyle:{
        fontSize:16,
    },
    authorStyle:{
        marginTop:10,
        fontSize:14,
    },
    dateViewStyle:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        // backgroundColor:"#ff1493",
    },
    dateStyle:{
        fontSize:12,
    },
    text:{
        fontSize:26
    }
})