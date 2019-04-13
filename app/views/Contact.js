import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation'

export class Contact extends React.Component {
    static navigationOptions = {
    }
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            name: '',
            email: ''
        }
    }

    clearFields=()=> this.setState({name: '', msg: '', email: ''});

    sendMessage=()=> {
        Alert.alert(this.state.name, this.state.msg + '\n\n' + this.state.email);
        this.props.navigation.goBack();
    };

    render() {
        // TODO: need to fix the navigation issue;
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Contact Us</Text>
                
                <TextInput 
                    style={styles.inputs}
                    placeholder= {' Enter Name'}
                    onChangeText={(text)=> this.setState({name: text})}
                    value={this.state.name} 
                />
                <TextInput 
                    style={styles.multiInput}
                    placeholder= {'Enter Message'}
                    onChangeText={(text)=> this.setState({msg: text})}
                    value={this.state.msg}
                    multiline = {true}
                    numberOfLines = {4}
                />

                <TextInput 
                    style={styles.inputs}
                    placeholder= {'Enter Email'}
                    onChangeText={(text)=> this.setState({email: text})}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '40%'
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        flex: 5.5
    },
    inputs: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingTop: '3%',
    },
    multiInput: {
        flex: 2.5,
        width: '80%',
        paddingTop: 20,
        borderBottomWidth: 2,
        borderColor: 'black'
    },
    buttons: {
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 16,
        borderColor: 'blue',
        borderWidth: 4,
        borderRadius: 5,
        padding: 2.5
    },
});