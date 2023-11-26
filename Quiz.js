

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Quiz= () => {
  return (
    <View>
      
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'data:image/png;base64,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',
          }}
          style={styles.image}
        />
      </View>
      <Text> Your Name </Text>
      <Text> your Age </Text>
      <Text style={styles.startButtonText}>Start Quiz</Text>
      <View>
      <TouchableOpacity>
        <Text>Let's Start Our Quiz </Text>
      </TouchableOpacity>
    </View>


    
    <Text> 1. What is the sum of 2+3 </Text>
    <View>
      <TouchableOpacity>
        <Text>* 2 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*5 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*9 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*0 </Text>
      </TouchableOpacity>
    </View>
    <Text> 2. What is the sum of 7+8 </Text>
    <View>
      <TouchableOpacity>
        <Text>* 87 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*59 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*15 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*12 </Text>
      </TouchableOpacity>
    </View>
    <Text> 1. What is the sum of 4+3 </Text>
    <View>
      <TouchableOpacity>
        <Text>* 2 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*7 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*9 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*0 </Text>
      </TouchableOpacity>
    </View>
    <Text> 1. What is the sum of 6+8 </Text>
    <View>
      <TouchableOpacity>
        <Text>* 2 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*14 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*9 </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text>*0 </Text>
      </TouchableOpacity>
    </View>
    

    <View>
      <TouchableOpacity>
        <Text>
            Finish
         
</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
};

export default Quiz;

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