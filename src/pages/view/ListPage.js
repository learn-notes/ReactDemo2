import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

/**
 * List组件
 */
export default class ListPage extends Component {

    static navigationOptions = {
        title: 'List组件',
        headerStyle: {
            backgroundColor: '#FF4081',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { name: '鬼剑士' },
                        { name: '神枪手' },
                        { name: '魔法师' },
                        { name: '格斗家' },
                        { name: '圣职者' },
                    ]}
                    renderItem={({ item }) => this._createItemView(item)}
                    keyExtractor={this._extraUniqueKey}
                />
            </View>
        );
    }

    _extraUniqueKey(item, index) {
        return "index" + index + item;
    }

    _createItemView(item) {
        return (
            <TouchableOpacity onPress={this.onPressItem}>
                <View style={{backgroundColor:'#242424'}}>
                    <Text style={{ fontSize: 16, width: '100%', height: 50 }}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    _onItemClick(item) {
        console.log("page" + this.state.page + " = " + item.name)
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