import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';

/**
 * TextInput组件
 */
export default class TextInputPage extends Component {

    static navigationOptions = {
        title: 'TextInput组件',
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
                <Image
                    source={require('../../img/dnf_kk01.jpg')}
                    style={{ width: 320, height: 100, alignSelf: 'center' }}
                />
                <Text style={{ fontStyle: 'italic' }}>你知道我是谁吗？</Text>
                <TextInput
                    style={{ height: 50, fontStyle: 'italic' }}
                    placeholder='请输入名字'
                    placeholderTextColor='#EEAEEE'
                    returnKeyType='search'
                    defaultValue='默认值'
                    // 只有Android有效
                    // autoCompleteType='password'

                    // 只有IOS有效
                    // clearButtonMode='always'
                    // clearTextOnFocus={false}

                    onChange={()=>console.log('onchange')}
                />
                <Text style={{ color: 'red', paddingTop: 10 }}>夜晚降临……那女孩仰望夜空……和我一样思念着远方的人…… </Text>
                <Text style={{ color: '#FF0000', }}>鲜血四溅的感觉,让我兴奋</Text>
                <Text style={{ color: '#FF0000', }}>你要找什么。</Text>
                <Text style={{ color: '#FF0000', }}>你来这儿干嘛。</Text>
                <Text style={{ color: '#FF0000', }}>高手对决时.........要时刻保持警惕</Text>
                <Text style={{ color: '#FF0000', }}>所谓武器就是......</Text>


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
        paddingLeft: 16,
    },
    head: {
        fontSize: 20,
        color: '#000',
        padding: 16,
        backgroundColor: '#FF00FF'
    }
});