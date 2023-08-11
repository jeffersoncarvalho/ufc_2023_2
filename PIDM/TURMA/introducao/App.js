import { StyleSheet, View, Text } from 'react-native';
import HelloRN from './components/01HelloRN';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Título</Text>
      <HelloRN />
    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  titulo: {
    fontSize:100,
    fontWeight: "bold",
    color: "red"
  }

});
