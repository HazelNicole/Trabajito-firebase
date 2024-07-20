import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

// Importa las imágenes locales
import Perrito from '../../assets/perrito.jpg';
import Ratita from '../../assets/ratita.jpg';
import Equis from '../../assets/equis.jpg';

const DATA = [
    {
        id: '1',
        title: 'Colección Perrito',
        image: Perrito,
    },
    {
        id: '2',
        title: 'Colección Ratita',
        image: Ratita,
    },
    {
        id: '3',
        title: 'Colección Ay equis',
        image: Equis,
    },
    // Añade más colecciones según sea necesario
];

const Collection = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Mire profe una pantalla sorpresa</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    card: {
        margin: 15,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 5,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 360, // Incrementa la altura de la imagen
    },
    title: {
        padding: 15,
        fontSize: 20, // Incrementa el tamaño de la fuente
        fontWeight: 'bold',
    },
});

export default Collection;
