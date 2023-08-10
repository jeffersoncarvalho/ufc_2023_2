import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Jefferson de Carvalho</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold"}}>Jefferson de Carvalho</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

