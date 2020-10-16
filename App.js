import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [entredTask, setEntredTask] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const taskInputHandler = (enteredText) => {
    setEntredTask(enteredText);
  };

  const addTaskHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, entredTask]);
  };

  return (
    // <View style={styles.container}>
    //   <StatusBar style="lig

    // <Text style={styles.text}>{outputText}</Text>
    //   <Button title="clique aqui" onPress={() => setOutputText('pfff')}/>
    // </View>
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Tasks"
            style={styles.inputText}
            onChangeText={taskInputHandler}
            value={entredTask}
          />
          <Button title="ADD" onPress={addTaskHandler} />
        </View>
        <View>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.listItems}>
              <Text>{goal}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText: {
    width: '80%',
    padding: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
