import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Progress } from '../components/Progress';
import { Menu } from '../components/Menu';


export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <Progress />
                <Menu />

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})