import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Магазин</Text>
    </View>
  )
}
const Footer = () => {
  return (
    <View style={styles.header}>
      <Text>Магазин</Text>
    </View>
  )
}

const ProductCard = ({title,src,price}) => {
  return (
    <View style={styles.Card}>
      <Image source={src} style={styles.Image} />
      <Text>{title}</Text>
      <Text>Цена: {price} $</Text>
    </View>
  )
}

export default function App() {
  const products = [
    {
      title: 'Товар 1',
      src: require('./assets/i.webp'),
      price: 1000,
      id: 1,
    },
    {
      title: 'Товар 1',
      src: require('./assets/i (1).webp'),
      price: 1500,
      id: 2,
    },
  ]
  return (
    <View style={styles.container}>
      <Header />
        <ScrollView>
          {products.map((product) => (
            <ProductCard key={product.id} title={product.title} src={product.src} price={product.price}/>
          ))}
        </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  Image:{
    position:'static !important',
    height: 300,
    width: 300,
    borderRadius: 5,
  },
});

