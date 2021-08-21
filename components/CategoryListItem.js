import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native'

import DevicesImg from '../assets/devices.png'

function CategoryListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Devices</Text>
      <Image style={styles.categoryImg} source={DevicesImg} />
    </View>
  );
}

export default CategoryListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#FFF',
    elevation: 5,
    marginBottom: 16
  },
  categoryImg: {
    width: 64,
    height: 64
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 8
  },
});