import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
// import { StackNavigator } from 'react-navigation';



export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to Login'/>
                <Hero />
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