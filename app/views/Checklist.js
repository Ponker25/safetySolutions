import React from 'react';
import { View, StyleSheet, Text, ScrollView, DatePickerAndroid, DatePickerIOS, TextInput } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
// import { CheckListItem } from '../components/CheckListItem'

// Styling
const styles = StyleSheet.create({
    checklistContainer: {
        flexDirection: 'row',

    },
})
export class Checklist extends React.Component {
    static navigationOptions = {
        header: null


    };

    state = {
        // Test Values
        item1: false,
        item2: false,

        // Required Safety Equipment
        hardHat: false,
        safetyGlasses: false,
        goggles: false,
        workGloves: false,
        hearingProtection: false,
        faceShield: false,
        safetyFootwear: false,
        elevatedWork: false,
        fallProtectionPPE: false,
        barricading_Cones: false,
        scaffolding: false,
        fireExtinguisher: false,
        lockBox_breakerBox: false,
        masterControlLocks: false,
        arcFlashPPE: false,
        insulatedTools: false,
        rubberGoods: false,
        confinedSpaces: false,
        airMoniter: false,
        blower: false,
        retrievelTripod: false,
    };

    // Functions for this page:
    clearFields = () => ({

    });
    handleSubmit = () => {

        console.log(this.state)
    };

    render() {
        const { hardHat, safetyGlasses, goggles, workGloves, hearingProtection, faceShield, safetyFootwear, elevatedWork, fallProtectionPPE, barricading_Cones,
            scaffolding, fireExtinguisher, lockBox_breakerBox, masterControlLocks, arcFlashPPE, insulatedTools, rubberGoods, confinedSpaces, airMoniter, blower, retrievelTripod,
            item2 } = this.state;
        return (
            <ScrollView>
                {/* Beginning of checklist */}
                <View>
                    <Text>Job #:</Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder={"1234"}
                        keyboardType={"number-pad"}
                        onChangeText={(text) => this.setState({ jobNumber: text })}
                        value={this.state.jobNumber}
                    />
                    <Text>Project Name:</Text>
                    <TextInput
                        style={styles.inputs}
                        placeholder={"Project Name"}
                        onChangeText={(text) => this.setState({ projectName: text })}
                        value={this.state.projectName}
                    />
                    <Text>Job Description:</Text>
                    <TextInput
                        style={styles.inputs}
                        multiline={true}
                        numberOfLines={4}
                        placeholder={"Job Description"}
                        onChangeText={(text) => this.setState({ jobDescription: text })}
                        value={this.state.jobDescription}
                    />
                </View>
                <Text>LIST ALL REQUIRED SAFETY EQUIPMENT</Text>
                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.hardHat ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ hardHat: !hardHat }); }}
                    />
                    <Text>Hard Hat</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.safetyGlasses ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ safetyGlasses: !safetyGlasses }); }}
                    />
                    <Text>Safety Glasses</Text>
                </View>

                <View style={styles.checklistContainer}>

                    <Checkbox
                        status={this.state.goggles ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ goggles: !goggles }); }}
                    />
                    <Text>Goggles</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.workGloves ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ workGloves: !workGloves }); }}
                    />
                    <Text>Work Gloves</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.hearingProtection ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ hearingProtection: !hearingProtection }); }}
                    />
                    <Text>Hearing Protection</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.faceShield ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ faceShield: !faceShield }); }} />
                    <Text>Face Shield</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.safetyFootwear ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ safetyFootwear: !safetyFootwear }); }} />
                    <Text>Safety Footwear</Text>
                </View>

                <View style={styles.checklistContainer}>

                    <Checkbox
                        status={this.state.elevatedWork ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ elevatedWork: !elevatedWork }); }}
                    />
                    <Text>Elevated Work</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.fallProtectionPPE ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ fallProtectionPPE: !fallProtectionPPE }); }}
                    />
                    <Text>Fall Protection PPE</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.barricading_Cones ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ barricading_Cones: !barricading_Cones }); }}
                    />
                    <Text>Barricading / Cones</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.scaffolding ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ scaffolding: !scaffolding }); }} />
                    <Text>Scaffolding</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.fireExtinguisher ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ fireExtinguisher: !fireExtinguisher }); }} />
                    <Text>Fire Extinguisher</Text>
                </View>

                <View style={styles.checklistContainer}>

                    <Checkbox
                        status={this.state.lockBox_breakerBox ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ lockBox_breakerBox: !lockBox_breakerBox }); }}
                    />
                    <Text>Lockbox / Breaker Box</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.masterControlLocks ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ masterControlLocks: !masterControlLocks }); }}
                    />
                    <Text>Master Control Locks</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.arcFlashPPE ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ arcFlashPPE: !arcFlashPPE }); }}
                    />
                    <Text>Arc Flash PPE</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.insulatedTools ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ insulatedTools: !insulatedTools }); }} />
                    <Text>Insulated Tools</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.rubberGoods ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ rubberGoods: !rubberGoods }); }} />
                    <Text>Rubber Goods</Text>
                </View>

                <View style={styles.checklistContainer}>

                    <Checkbox
                        status={this.state.confinedSpaces ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ confinedSpaces: !confinedSpaces }); }}
                    />
                    <Text>confinedSpaces</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.airMoniter ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ airMoniter: !airMoniter }); }}
                    />
                    <Text>Air Moniter</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.blower ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ blower: !blower }); }}
                    />
                    <Text>Blower</Text>
                </View>

                <View style={styles.checklistContainer}>
                    <Checkbox
                        status={this.state.retrievelTripod ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ retrievelTripod: !retrievelTripod }); }}
                    />
                    <Text>Retrievel Tripod</Text>
                </View>
                <Text>Overall Project Schedule:</Text>
                <Text>Start Date</Text>

                <Text>End Date</Text>

                <Button
                    mode="contained"
                    onPress={() => this.handleSubmit()}>
                    Submit
  </Button>
                <Button
                    mode="contained"
                    onPress={() => this.clearFields()}>
                    Clear
  </Button>
            </ScrollView>
        )
    }
}
