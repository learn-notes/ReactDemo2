import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

/**
 * 布局Flex
 */
export default class FlexPage extends Component {

    static navigationOptions = {
        title: '布局Flex',
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
            <ImageBackground style={{ width: '100%', height: '100%' }}
                source={require('../img/dnf_gsd01.png')}>
                <View style={styles.container}>
                    <View style={[styles.item, styles.itemOne]}>
                        <Text style={styles.title}>用耳去听</Text>
                    </View>
                    <View style={[styles.item, styles.itemTwo]}>
                        <Text style={styles.title}>用心去斩</Text>
                    </View>
                    <View style={[styles.item, styles.itemThree]}>
                        <Text style={styles.title}>剑斩肉身</Text>
                    </View>
                    <View style={[styles.item, styles.itemFour]}>
                        <Text style={styles.title}>心斩灵魂。</Text>
                    </View>
                </View>
            </ImageBackground>
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
        justifyContent: 'space-between'
    },
    item: {
        backgroundColor: '#EED2EE',
        margin: 6,
        borderColor: '#000',
        borderWidth: 1,
        alignItems: 'center'
    },
    itemOne: {
        alignSelf: 'flex-end'
    },
    itemTwo: {
        alignSelf: 'flex-start'
    },
    itemThree: {
        alignSelf: 'center'
    },
    itemFour: {},
    title: {
        fontSize: 20,
        color: '#fff',
        padding: 16,
        textAlign: 'center',
    }
});