import React,{Component} from 'react';
import {View,Text,StyleSheet,Alert,Button} from 'react-native';
import {fetchRequest} from './NetworkRequest'
import {CaptchaModule} from './nativeModules'

<script src="https://ssl.captcha.qq.com/TCaptcha.js"></script>

export default class Right extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        title:navigation.state.params.title,
        gestureResponseDistance:{horizontal:300},
    });

    constructor(props) {
        super(props);
        this.state = {
            captchaData: "",
          };
        // this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        // this.loadData();
    }

    //获取数据
    // loadData() {
    //     fetchRequest('http://news.gzcc.cn/html/xiaoyuanxinwen/','GET')
    //     .then(res => {
    //         Alert.alert('请求成功');
    //     }).catch(err => {
    //         Alert.alert('err');
    //     });
    // }

    render() {
        const onPressCaptcha = async () => {
            try {
              const appId = "2008264662";
              const res = await CaptchaModule.showCaptcha(appId);
              if (res.ret === 0) {
                alert("验证通过");
                this.setState({
                    captchaData: res.randstr,
                  });
              }
            } catch (e) {
              alert(`验证发生异常, error=${e.message}`);
            }
          };
          return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text>Hello world!</Text>
              <Text>验证返回值：{this.state.captchaData}</Text>
              <Button title="获取验证码" onPress={onPressCaptcha} />
            </View>
          );
        // return (
        //     <View style={styles.container}>
        //       {/* <Text style={styles.text}>这是右边</Text> */}
        //   </View>
        // )
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