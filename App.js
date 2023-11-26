
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native'; // Add this line
import MyStack from './navigation'; // Assuming you have a file named 'navigation.js'

const App = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
