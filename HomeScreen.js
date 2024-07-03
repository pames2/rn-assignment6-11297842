import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    name: 'Office Wear',
    description: 'Reversible angora cardigan',
    price: '$10.00',
    image: require('./assets/dress1.png'), 
  },
  {
    id: '2',
    name: 'Black',
    description: 'This product is even better.',
    price: '$20.00',
    image: require('./assets/dress2.png'),
  },
  {
    id: '3',
    name: 'Church Wear',
    description: 'You will love this product.',
    price: '$30.00',
    image: require('./assets/dress3.png'),
  },
  {
    id: '4',
    name: 'Lamerei',
    description: 'You will love this product.',
    price: '$30.00',
    image: require('./assets/dress4.png'),
  },
  {
    id: '5',
    name: '21WN',
    description: 'You will love this product.',
    price: '$30.00',
    image: require('./assets/dress5.png'),
  },
  {
    id: '6',
    name: 'Lopo',
    description: 'You will love this product.',
    price: '$30.00',
    image: require('./assets/dress6.png'),
  },
  {
    id: '7',
    name: 'Product 3',
    description: 'You will love this product.',
    price: '$30.00',
    image: require('./assets/dress7.png'),
  },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const loadCart = async () => {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    loadCart();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.ourstory}>
          <Text style={styles.ourstorytext}>Our Story</Text>
          <View style={styles.ourstoryimage}>
            <Image source={require('./assets/Listview.png')} style={{ marginTop: 28, marginRight: 20 }} />
            <Image source={require('./assets/Filter.png')} style={{ marginTop: 28 }} />
          </View>
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Ionicons name="add-circle" size={32} color="black" />
              </TouchableOpacity>
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.productList}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  ourstory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ourstorytext: {
    fontSize: 24,
    fontWeight: 'light',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'sans-serif',
  },
  ourstoryimage: {
    flexDirection: 'row',
  },
  productContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: 'grey',
    borderWidth: 2,
    margin: 2,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#dd8560',
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  productList: {
    paddingBottom: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
