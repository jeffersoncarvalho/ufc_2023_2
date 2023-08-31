import { StyleSheet, View} from 'react-native';
//import HelloRN from './components/01HelloRNV1';
//import HelloRNV2 from './components/02HelloRNV2';
//import MyCat from './components/03MyCat';
//import MyCat from './components/04MyCat';
//import Parent from './components/05Nested/05Parent';
//import State from './components/06State';
//import estilos from './css/MyCSS';
//import MyTextInput from './components/07TextInput';
import JuntarFrases from './components/08JuntarFrases';

export default function App() {
  return (
    <JuntarFrases />
  );
}

/*

                   ---> ChildA
App ---> Parent---> 
                   ---> ChildB


*/

