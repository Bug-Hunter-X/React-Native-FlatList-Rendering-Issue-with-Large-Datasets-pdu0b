```javascript
// bugSolution.js
import React from 'react';
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ key: i.toString(), value: `Item ${i}` }));

const Item = ({ item, index }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.value}</Text>
  </View>
);

const renderItem = ({ item, index }) => <Item item={item} index={index} key={item.key} />;

const App = () => (
  <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={(item) => item.key}
    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
    windowSize={21} // Adjust this value for performance optimization
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 32,
  },
});

export default App;
```