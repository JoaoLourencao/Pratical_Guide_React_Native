import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Merry');


  return (
    // <View style={styles.container}>
    //   <StatusBar style="light"/>

    // <Text style={styles.text}>{outputText}</Text>
    //   <Button title="clique aqui" onPress={() => setOutputText('pfff')}/>
    // </View>


    <View>
      <View>

      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
  },
});
