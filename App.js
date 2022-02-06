import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!!</Text>
      <Image
        source={{uri:'https://picsum.photos/200/200'}}
        style={styles.image}
      />
      <TouchableOpacity  
        style={styles.touchable}
        onPress={() => Alert.alert('Hello!!!')}
      >
        <Text style={styles.title}>Touchable</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFF',
  },
  image: {
    height: 200, 
    width: 200
  },
  touchable: {
    backgroundColor: '#1A69ED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
})

export default App;
