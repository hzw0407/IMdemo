import React,{Component} from 'react';
import {View,Text,StyleSheet,Alert} from 'react-native';
import {fetchRequest} from './NetworkRequest'

export default class Right extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        title:navigation.state.params.title,
        gestureResponseDistance:{horizontal:300},
    });

    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    //获取数据
    loadData() {
        fetchRequest('http://news.gzcc.cn/html/xiaoyuanxinwen/','GET')
        .then(res => {
            Alert.alert('请求成功');
        }).catch(err => {
            Alert.alert('err');
        });
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>这是右边</Text>
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