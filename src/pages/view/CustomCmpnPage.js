import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

/**
 * 自定义Text组件
 */
export default class CustomCmpnPage extends Component {

    static navigationOptions = {
        title: '自定义Text',
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
                <HeaderText>邪恶如同灯光下的阴影，即使看不见也会存在。</HeaderText>
                <Text style={{ fontStyle: 'italic' }}>尼尔巴斯哥哥，你到底在哪？</Text>
                <Image
                    source={require('../../img/dnf_glds01.jpg')}
                    style={{ width: 200, height: 350, marginTop: 30, alignSelf: 'center' }}
                />
            </View>
        );
    }
}

/**
 * 自定义组件
 * 实现一个简单的文本显示组件
 */
class HeaderText extends Component {
    render() {
        return (
            <Text style={styles.head}>
                {this.props.children}
            </Text>
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