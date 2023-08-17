import { StyleSheet, View, Text } from 'react-native';
import HelloRN from './components/01HelloRN';
import HelloRNV1 from './components/02HelloRNV1';
import Cat from './components/03FullName';
import Cafe from './components/04Cafe';

export default function App() {
  return (
    <View style={estilos.container}>
      <Cafe />
    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize:50,
    fontWeight: "bold",
    color: "red"
  }

});
