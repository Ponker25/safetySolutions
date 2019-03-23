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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header message='Press to Login' navigate={navigate} />
                <Hero />
                <Menu navigate={navigate} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})