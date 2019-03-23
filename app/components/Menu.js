import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class Menu extends React.Component {

    onPress = () => {
        Alert.alert('You tapped the button!');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('VideoClipsRT')}>
                        <Text style={styles.buttonText}>VIDEOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('RegisterRT')}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('BlogRT')}>
                        <Text style={styles.buttonText}>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('ChecklistRT')}>
                        <Text style={styles.buttonText}>CHECKLIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('AboutRT')}>
                        <Text style={styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        height: '50%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,

    }
})