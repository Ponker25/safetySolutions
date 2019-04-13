import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Checkbox } from '../components/Checkbox'


export class Checklist extends React.Component {
    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <View>
                <Text>Hello World</Text>
                <Text>This is the Checklist Page</Text>
                <Checkbox
                    status={'unchecked'}
                    onPress={() => this.setState({ item1: true })}
                />
                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>
            </View>
        )
    }
}