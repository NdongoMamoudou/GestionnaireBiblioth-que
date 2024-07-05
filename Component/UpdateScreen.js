import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function UpdateScreen({ route, navigation }) {

    //je recupére id depuis route 
    const { bookId } = route.params;

    const [book, setBook] = useState({
        title: '',
        author: '',
        year: '',
        description: '',
        category: ''
    });

    // Utiliser useEffect pour récupérer les détails du livre lorsque le composant est render
    useEffect(() => {
        envoyerDetailsBook();

    }, [bookId]);


    // fonction pour recuperer les details du livre depuis API
    const envoyerDetailsBook = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/books/${bookId}`);
            const data = await response.json();
            setBook(data);

        } catch (error) {
            console.error('Erreur lors de la récupération des détails du livre:', error);
        }
    };


    const modifierLivre = (name, value) => {
        setBook({ ...book, [name]: value });
    };


    // Fonction pour envoyer les modifications à l'API
    const gererModificationLivre = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/books/${bookId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });

            if (response.ok) {
                alert('Livre modifié avec succès !');
                envoyerDetailsBook();
                navigation.goBack();
            } else {
                alert('echec sur la modification ');
            }

        } catch (error) {
            console.error('Erreu sur la  modification du livre:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Modification du livre</Text>
            <TextInput
                style={styles.input}
                placeholder="Titre"
                value={book.title}
                onChangeText={(value) => modifierLivre('title', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Auteur"
                value={book.author}
                onChangeText={(value) => modifierLivre('author', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Année"
                value={book.year}
                onChangeText={(value) => modifierLivre('year', value)}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={book.description}
                onChangeText={(value) => modifierLivre('description', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Catégorie"
                value={book.category}
                onChangeText={(value) => modifierLivre('category', value)}
            />
            <Button title="Modifier" onPress={gererModificationLivre} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
