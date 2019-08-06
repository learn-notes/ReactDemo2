import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

/**
 * Image组件
 */
export default class ImagePage extends Component {

    static navigationOptions = {
        title: 'Image组件',
        headerStyle: {
            backgroundColor: '#FF4081',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontStyle: 'italic' }}>死亡只不过是另一种生命的开始。</Text>

                {/* 同级目录下资源引用 */}
                <Image
                    source={require('./dnf_cs.jpg')}
                    style={{ width: 50, height: 80, marginTop: 30, alignSelf: 'center' }}
                />

                {/* 不同级目录下资源引用 */}
                <Image
                    source={require('../../img/dnf_dfls01.jpg')}
                    style={{ width: 50, height: 80, marginTop: 30, alignSelf: 'center' }}
                />

                {/* 网络资源引用 */}
                <Image
                    source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565090831656&di=09d03c210411aea7e5302e2ea158cf61&imgtype=0&src=http%3A%2F%2F03.imgmini.eastday.com%2Fmobile%2F20170904%2F20170904121441_b2c5a949f6f83dc0353cc3f24e81bf37_5.jpeg' }}
                    style={{ width: 50, height: 80, marginTop: 30, alignSelf: 'center' }}
                />
                <Text style={{ color: '#FF0000', paddingLeft: 16 }}>1图同级目录下资源引用</Text>
                <Text style={{ color: '#FF0000', paddingLeft: 16 }}>2图不同级目录下资源引用</Text>
                <Text style={{ color: '#FF0000', paddingLeft: 16 }}>3图网络资源引用</Text>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    container: {
        //权重
        flex: 1,
        //背景
        // backgroundColor: '#FFF',
        paddingTop: 20,
    },
    head: {
        fontSize: 20,
        color: '#000',
        padding: 16,
        backgroundColor: '#FF00FF'
    }
});