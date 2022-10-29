import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemData } from "../state/itemSlice";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from "react-native";

function MainScreen() {
  // ================================================================
  // Set up state
  const dispatch = useDispatch();

  const [itemToAdd, setItemToAdd] = useState({ itemName: "" });

  const itemData = useSelector((state) => state.item.itemData);
  const itemDataIsLoading = useSelector(
    (state) => state.item.itemDataIsLoading
  );
  const itemDataError = useSelector((state) => state.item.itemDataError);

  // ================================================================
  //   Handlers
  const onAddItemHandler = () => {
    if (itemToAdd.itemName) {
      dispatch(addItemData(itemToAdd));
      setItemToAdd({ itemName: "" });
    } else {
      alert("Please enter an item name.");
    }
  };

  // ================================================================
  //   Render

  // Item ItemDataIsLoading

  return (
    <View style={styles.container}>
      <Text>Main Screen.</Text>
      <TextInput
        style={styles.input}
        value={itemToAdd}
        onChangeText={(text) => setItemToAdd({ itemName: text })}
      />
      <Button title="Add Item" onPress={() => onAddItemHandler()} />
      {itemData.length > 0 ? (
        <FlatList
          data={itemData}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item.itemName}</Text>
          )}
        />
      ) : (
        <Text>No items to show.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#777",
    margin: 10,
    width: 200,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default MainScreen;
