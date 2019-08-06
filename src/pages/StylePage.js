import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

/**
 * 样式style
 */
export default class StylePage extends Component {

    static navigationOptions = {
        title: '样式style',
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
                <Text style={styles.title}>你好啊，我叫赛丽亚！</Text>
                <Image
                    source={require('../img/dnf_sly02.jpg')}
                    style={{ width: 200, height: 350, marginTop: 30 }}
                />
            </View>

        );
    }
}

let styles = StyleSheet.create({
    container: {
        //权重
        flex: 1,
        alignItems: 'center',
        //背景
        backgroundColor: '#FFFFE0',
        margin: 30,
        //边框参数
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        //阴影
        shadowColor: '#000fff',
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 20,
        },

    },
    title: {
        fontSize: 20,
        color: '#FF0000',
        textAlign: 'center',
        // 字符间距
        letterSpacing: 2,
        //行间距
        lineHeight: 30,
        //下划线或删除线
        textDecorationLine: 'underline',
        // 以下两项仅支持IOS
        // textDecorationColor:'#FF0000',
        // textDecorationStyle:'dotted',

    }
});