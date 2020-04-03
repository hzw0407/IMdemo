import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions, 
    Button,
    Image,
    FlatList,
    Alert,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import Detail from './Detail'
import Right from './Right'
import {Ionicons} from "react-native-vector-icons/Ionicons"
import { color } from 'react-native-reanimated';

let {width,height} = Dimensions.get('window');
const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class Home extends React.Component{
  static navigationOptions = ({navigation,screenProps}) => ({
    //此处可修改导航栏标题
    headerTitle:navigation.state.params?navigation.state.params.headerTitle:'首页啊',
    headerRight:(
        <View style={{marginRight:30/1536*width}}>
                    <TouchableOpacity onPress={() =>{
                      navigation.navigate('Right');
                    }}>
                    <Text style={{color:'red',marginRight:20}}>右边按钮</Text>
                    </TouchableOpacity>
                </View>
    ),
    gestureResponseDistance:{horizontal:300},
});

    constructor(props){
        super(props);
        this.state = {
            //数据数组
            data: [],
            //是否正在加载
            loaded: false
        };
        this.fetchData = this.fetchData.bind(this);
        this.pushDetail = this.pushDetail.bind(this);
        //将navigation复制给全局变量 才能在子组件进行跳转
        global.props = this.props.navigation;
    }

    componentDidMount() {
        this.fetchData()
    }

    //抓取数据
    fetchData() {
        this.setState({
            data: [
                {
                id: '1',
                title: "标题1",
                year: "2020",
                posters: { thumbnail: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585737299484&di=4b013b39d518f9b90e232e48a66e7414&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F78%2F52%2F01200000123847134434529793168.jpg" }
              },
              {
                id: '2',
                title: "标题2",
                year: "2021",
                posters: { thumbnail: "http://tx.haiqq.com/uploads/allimg/170510/001R35F4-3.jpg" }
              },
              {
                id: '3',
                title: "标题3",
                year: "2022",
                posters: { thumbnail: "https://b-ssl.duitang.com/uploads/blog/201601/06/20160106222247_xNjVa.thumb.224_0.jpeg" }
              },
              {
                id: '4',
                title: "标题4",
                year: "2023",
                posters: { thumbnail: "http://img.duoziwang.com/2016/07/27/201517639.png" }
              }
            ],
              loaded: true
        });
      //   fetch(REQUEST_URL)
      // .then((response) => response.json())
      // .then((responseData) => {
      //   this.setState({
      //       data: this.state.data.concat(responseData.movies),
      //       loaded: true
      //   });
      // });
    }

    pushDetail() {
        Alert.alert('点击的id是' + item.id)
        // this.props.navigation.navigate('Detail')
    }

    renderLoadingView() {
        return (
          <View style={styles.container}>
            <Text>正在加载电影数据...</Text>
          </View>
        );
      }
    
      //创建列表布局
      renderMovie({ item }) {
        let { target } = this.props;
        //没有年份默认显示2020
        var Year = item.year ? item.year : '2020';
        //如果图片是以gif结尾 则默认显示一张别的图片
        var image = String(item.posters.thumbnail);
        if (image.endsWith('gif')) {
            image = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585737299484&di=4b013b39d518f9b90e232e48a66e7414&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F78%2F52%2F01200000123847134434529793168.jpg';
        }else {
            image = String(item.posters.thumbnail);
        }
        return (
            <View style={styles.container}>
                  <Image
                    source={{ uri: image}}
                    style={styles.thumbnail}
                  />
                  <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{Year}</Text>
                  </View>
                  <View style={styles.pushView}>
                      <Button style={styles.pushButton} title='点我跳转到详情' onPress={()=>{
                          // Alert.alert('点击的id是' + item.id);
                          global.props.navigate('Detail');
                      }}></Button>
                  </View>
                  <View style={styles.spaceView}>
                  </View>
            </View>
        );
      }

    render() {
        if (!this.state.loaded) {
          return this.renderLoadingView();
        }
    
        return (
          <FlatList
            data={this.state.data}
            renderItem={this.renderMovie}
            style={styles.list}
            keyExtractor={item => item.id}
          />
        );
        // return (
            
        //     <View style={styles.container}>
        //           <Image
        //             source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585737299484&di=4b013b39d518f9b90e232e48a66e7414&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F78%2F52%2F01200000123847134434529793168.jpg'}}
        //             style={styles.thumbnail}
        //           />
        //           <View style={styles.rightContainer}>
        //             <Text style={styles.title}>{'标题'}</Text>
        //             <Text style={styles.year}>{'年份'}</Text>
        //           </View>
        //           <View style={styles.pushView}>
        //               <Button style={styles.pushButton} title='点击我' onPress={()=>{
        //                 //   Alert.alert("点击的id是" + item.id)
        //                 this.props.navigation.navigate('Detail')
        //               }}></Button>
        //           </View>
        //           <View style={styles.spaceView}>
        //           </View>
        //         </View>
        // );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    rightContainer: {
      flex: 1
    },
    title: {
      fontSize: 20,
      marginTop:10,
      marginBottom: 8,
      textAlign: "center"
    },
    year: {
      textAlign: "center"
    },
    thumbnail: {
      width: 70,
      height: 81
    },
    list: {
      paddingTop: 20,
      backgroundColor: "#F5FCFF"
    },
    spaceView:{
        width:width,
        height:10,
        backgroundColor:"#ff4500"
    },
    pushView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height:100,
    },
    pushButton: {
        fontSize: 18,
    },
  });


// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#f5f5f5'
//     },
//     text:{
//         fontSize:26
//     },
//     buttonView:{
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#00ffff',
//         width:width,
//         height:100
//     },
//     button:{
//         fontSize:20,
//         color:Colors.white
//     }
// })

