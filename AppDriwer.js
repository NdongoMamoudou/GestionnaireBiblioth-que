import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();  // Création d'une instance de Drawer Navigator

// Définition du composant de l'écran d'accueil
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Homepage</Text>
            <Button title="Go to Infos" onPress={() => navigation.navigate('Infos')} />
            <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
        </View>
    );
};

// Définition du composant de l'écran Infos
const InfosScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Infos</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
        </View>
    );
};

// Définition du composant de l'écran Contact
const ContactScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Contact</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to Infos" onPress={() => navigation.navigate('Infos')} />
        </View>
    );
};

// Fonction principale de l'application React Native
export default function App() {
    return (
        <NavigationContainer>  {/* Conteneur principal de navigation */}
            <Drawer.Navigator>  {/* Navigator de type Drawer (menu latéral) */}
                <Drawer.Screen name="Home" component={HomeScreen} />  {/* Écran d'accueil */}
                <Drawer.Screen name="Infos" component={InfosScreen} />  {/* Écran Infos */}
                <Drawer.Screen name="Contact" component={ContactScreen} />  {/* Écran Contact */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

// Styles CSS pour les composants React Native
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});
