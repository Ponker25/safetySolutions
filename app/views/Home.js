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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header message='Press to Login' navigate={navigate} />
                <Progress />
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