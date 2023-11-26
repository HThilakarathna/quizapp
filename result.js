

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const result= () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Lets improve our maths skill</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://stock.adobe.com/search?k=%22exam%20result%22',
          }}
          style={styles.image}
        />
      </View>
      <Text> Your Score Here=. </Text>
      <Text style={styles.startButtonText}>Start Quiz</Text>
      
      
    </View>
  );
};

export default result;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  startButtonText: {
    color: '#0066CC',
    fontSize: 18,
    fontWeight: 'bold',
  },
 
  
  
});