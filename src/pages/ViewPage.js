import React, { Component } from 'react';
import { Button, View, StyleSheet, ScrollView } from 'react-native';

/**
 * 视图View
 */
export default class ViewPage extends Component {

    static navigationOptions = {
        title: '视图View',
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
                        title="Text"
                        onPress={() => this.props.navigation.push('CustomCmpnPage')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Image"
                        onPress={() => this.props.navigation.push('ImagePage')}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="List"
                        onPress={() => this.props.navigation.push('ListPage')}
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