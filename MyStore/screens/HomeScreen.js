import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { CartContext } from '../contexts/CartContexts'; 
import { useNavigation } from '@react-navigation/native'; 

const products = [
  { id: 1, title: 'Office Wear', price: '$120', image: require('../assets/dress1.png') },
  { id: 2, title: 'Black', price: '$130', image: require('../assets/dress2.png') },
  { id: 3, title: 'Church Wear', price: '$110', image: require('../assets/dress3.png') },
  { id: 4, title: 'Lamerei', price: '$140', image: require('../assets/dress4.png') },
  { id: 5, title: '21WN', price: '$150', image: require('../assets/dress5.png') },
  { id: 6, title: 'Lopo', price: '$90', image: require('../assets/dress6.png') },
  { id: 7, title: '21WN', price: '$160', image: require('../assets/dress7.png') },
];

const HomeScreen = () => {
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation(); 

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.productDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>Reversible Angora Cardigan</Text>
        <Text style={styles.priceText}><Text style={styles.price}>{item.price}</Text></Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddToCart(item)}
      >
        <Image source={require('../assets/add_circle.png')} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.icon}>
          <Image source={require('../assets/Menu.png')} style={styles.cartIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.icon}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </TouchableOpacity>
       
        <View style={styles.iconsRight}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/Search (1).png')} style={styles.cartIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textLine}>
        <Text style={styles.textLeft}>Our Story</Text>
        <View style={styles.iconsRight}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/Listview.png')} style={styles.cartIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/Filter.png')} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  textLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  textLeft: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
   margin:'10',
  },
  productList: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 650,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  productDetails: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 10,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'left',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 20,
    color: '#ff4d4d', 
    textAlign: 'left',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#ff4d4d', 
    textAlign: 'left',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 10,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
