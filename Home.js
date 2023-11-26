

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Title from'../components/title';
const Home = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>props.navigate("Quiz")}> 
        <Text>This is Quiz app</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://st.depositphotos.com/1032577/4119/i/450/depositphotos_41197145-stock-photo-quiz.jpg',
          }}
          style={styles.image}
        />
      </View>
      <Text> Register </Text>
      <Text style={styles.startButtonText}>Start Quiz</Text>
      <View>
      <TouchableOpacity>
        <Text>Let's Start Our Quiz </Text>
      </TouchableOpacity>
    </View>


    
   
    </View>
  );
};

export default Home;

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