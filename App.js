import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListScreen from './Component/ListScreen';
import UpdateScreen from './Component/UpdateScreen';
import AddScreen from './Component/AddScreen';



// Création d'une instance de Drawer Navigator
const Drawer = createDrawerNavigator();


// Définition du composant principal de l'application
export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen name="list" component={ListScreen} />
        <Drawer.Screen name="add" component={AddScreen} />
        <Drawer.Screen name="update" component={UpdateScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// css des composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
