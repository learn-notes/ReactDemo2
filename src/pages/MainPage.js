import React, { Component } from 'react';
import { Button, View, StyleSheet, ScrollView } from 'react-native';

/**
 * 首页
 */
export default class MainPage extends Component {

    static navigationOptions = {
        title: '首页',
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
            <ScrollView >
                <View style={styles.buttonContainer}>
                    <Button
                        title="样式style"
                        onPress={() => this.props.navigation.push('StylePage')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="布局flex"
                        onPress={() => this.props.navigation.push('FlexPage')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="视图View"
                        onPress={() => this.props.navigation.push('ViewPage')}
                    />
                </View>

                

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    buttonContainer: {
        margin: 10
    },
});