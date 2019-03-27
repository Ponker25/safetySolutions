import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export class Progress extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={95}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#152d44',
        padding: 50,
    },
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8,
    }
})