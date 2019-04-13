import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
// import { CheckListItem } from '../components/CheckListItem'


export class Checklist extends React.Component {
    static navigationOptions = {
        header: null
    };
    state = {
        checked: false,








    };

    render() {
        const { checked } = this.state;
        return (
            <View>
                <Text>Hello World</Text>
                <Text>This is the Checklist Page</Text>
                {/* <CheckListItem
                    status={'unchecked'}
                // onPress={() => this.setState({ item1: true })}
                /> */}
                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>

                <Text>This is the Checklist Page</Text>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: !checked }); }}
                />
            </View>
        )
    }
}