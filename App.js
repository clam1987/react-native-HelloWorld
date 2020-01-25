import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let [clicked, setClicked] = useState({isClicked: false})
  console.log(clicked)
  return (
    <View style={styles.container}>
      <Text>Hello Universe!</Text>
      <Button title="Click me" style={styles.button} onPress={() => {
        setClicked({isClicked: true})
      }}/>
      {clicked.isClicked === true ? <Text>Hello World!</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "blue",
    margin: 20,
    justifyContent: "center"
  }
});
