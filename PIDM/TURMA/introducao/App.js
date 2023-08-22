import { StyleSheet, View} from 'react-native';
//import HelloRN from './components/01HelloRNV1';
//import HelloRNV2 from './components/02HelloRNV2';
//import MyCat from './components/03MyCat';
import MyCat from './components/04MyCat';

export default function App() {
  return (
    <View style={estilos.container}>
      <MyCat />
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
    marginTop: 50
  },

  titulo: {
    fontSize:50,
    fontWeight: "bold",
    color: "red"
  }

});
