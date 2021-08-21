import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native'

function CategoryListItem(props) {
  const { category } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => { Alert.alert(category.name) }}
    >
      <View style={styles.container}>
        <Text style={styles.categoryTitle}>{category.name}</Text>
        <Image style={styles.categoryImg} source={category.image} />
      </View>
    </TouchableOpacity>
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