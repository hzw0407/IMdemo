import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Dimensions,Image, Alert,TouchableOpacity} from 'react-native';

let {width,height} = Dimensions.get('window');

export default class Detail extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            tabBarVisible: true,
            headerTitle:'详情1',
            headerRight:(
                <View style={{marginRight:30/1536*width}}>
                    <TouchableOpacity onPress={() =>{Alert.alert('点击了右边按钮')}}>
                        <Image source={require('../Test/Images/帽子.png')} style={{width: 30,height: 30,}} />
                    </TouchableOpacity>
                </View>
            )
        }
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>这是滚动视图</Text>
                    <Image style={styles.imageOneStyle} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585910498097&di=d100f5c33d404c6b598f59d59ae744eb&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150521%2F0005018428648451_b.jpg"}}></Image>
                    <Text style={styles.text}>这是第二张图片</Text>
                    <Image style={styles.imageTwoStyle} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585916004303&di=07707a473f57ef8d8ee960c8a2442a17&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F217720872.jpeg"}}></Image>
                    <Text style={styles.text}>这是第三张图片</Text>
                    <Image style={styles.imageThreeStyle} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585916133925&di=8b96c49089b8e93b0caea30a21759cd5&imgtype=0&src=http%3A%2F%2Fpic17.photophoto.cn%2F20101015%2F0012024647769942_b.jpg"}}></Image>
                    <Text style={styles.text}>这是第四张图片</Text>
                    <Image style={styles.imageFourStyle} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585916224865&di=a6e876cbe53e42d8e8e215c939379898&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fd31b0ef41bd5ad6e0b3cae0780cb39dbb7fd3c12.jpg"}}></Image>
                    <Text style={styles.text}>这是第五张图片</Text>
                    <Image style={styles.imageFiveStyle} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585916333043&di=3bbc64c59a2f70eb69bcc630e2dbfea3&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F02%2F28%2F157868cfe04901547237200ecd39ee13.jpg"}}></Image>
                </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    text:{
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        fontSize:20
    },
    imageOneStyle:{
        width:width,
        height:200
    },
    imageTwoStyle:{
        width:width,
        height:120,
    },
    imageThreeStyle:{
        width:width,
        height:150,
    },
    imageFourStyle:{
        width:width,
        height:200,
    },
    imageFiveStyle:{
        width:width,
        height:350,
    }
})