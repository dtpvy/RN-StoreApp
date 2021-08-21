import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App() {
  const categories = [
    {
      "id": 1,
      "name": "Devices",
      "image": require('./assets/devices.png')
    },
    {
      "id": 2,
      "name": "Fashion",
      "image": require('./assets/fashion.png')
    },
    {
      "id": 3,
      "name": "Make-up",
      "image": require('./assets/make-up.png')
    },
    {
      "id": 4,
      "name": "Trainers",
      "image": require('./assets/trainers.png')
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
