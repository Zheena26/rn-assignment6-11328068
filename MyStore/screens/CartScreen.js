import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../contexts/CartContexts';

const CartScreen = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromCart(item.id)}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
      <Button
        title="Clear Cart"
        onPress={() => clearCart()}
        disabled={cartItems.length === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  removeButton: {
    marginLeft: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartScreen;
