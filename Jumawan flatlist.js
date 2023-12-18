import React, { useState } from 'react';

const MyComponent = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", description: "This is a description for item 1" },
    { id: 2, title: "Item 2", description: "This is a description for item 2" },
  ]);

  const handlePressItem = (item) => {
    // Do something when an item is pressed
    console.log("Item pressed:", item);
  };

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePressItem(item)}>
          <View
 
style={styles.item}>

            
<Text
 
style={styles.title}>{item.title}</Text>

            
<Text
 
style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
});

export default MyComponent;