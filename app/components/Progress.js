import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export class Progress extends React.Component {
    constructor(props) {
        super(props);
        // TODO: have props pass in this.state.points value(seen below)
        this.state = {
            isMoving: false,
            points: 85
        };
    }

    render() {
        //  fill is calculated between 0-100
        const fill = (this.state.points)
        return (
            <View style={styles.container}>

                <AnimatedCircularProgress
                    size={300}
                    width={25}
                    fill={fill}
                    tintColor="#59F22A"
                    onAnimationComplete={() => console.log('ProgressBar onAnimationComplete')}
                    backgroundColor="#3d5875"
                    rotation={0}

                >
                    {fill =>
                        <View >

                            <Image
                                style={styles.fillImage}
                                source={require('./img/hardhat1.png')}
                            />
                            <Text style={styles.points}>{fill}/100</Text>
                        </View>
                    }
                </AnimatedCircularProgress>
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
    points: {
        textAlign: 'center',
        color: '#7591af',
        fontSize: 30,
        fontWeight: '100',
        flex: 3
    },

    fillImage: {
        width: undefined,
        height: undefined,
        padding: 80,
        flex: .5,
    }
})