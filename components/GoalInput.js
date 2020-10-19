import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';


const GoalInput = props => {

    const [entredTask, setEntredTask] = useState('');

    const taskInputHandler = (enteredText) => {
        setEntredTask(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(entredTask);
        setEntredTask('');
    };

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Tasks"
                    style={styles.inputText}
                    onChangeText={taskInputHandler}
                    value={entredTask}
                />
                <View style={styles.btnRow}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputText: {
        width: '80%',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
      },
      btnRow: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '60%',
      },
      button: {
        width: '40%'
      }
});

export default GoalInput;