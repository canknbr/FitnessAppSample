import { Link } from 'expo-router';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import FoodItem from '../components/FoodItem';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
const items = [
  {
    label:"Pizza",
    cal:75,
    brand:"Dominos"
  },
  {
    label:"Apple",
    cal:50,
    brand:"Generic"
  },
  {
    label:"Coffee",
    cal:105,
    brand:"Americano"
  }
]
export default function App() {
const [searchValue,setSearchValue] = useState("")
const performSearch = () => {
  console.warn("searchValue",searchValue)
  setSearchValue("")
}
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput value={searchValue} onChangeText={setSearchValue} placeholder='Search' style={styles.textInput} />
      { 
        searchValue &&  <AntDesign name="close" size={16} color="gray" />
      }
      </View>
      <Button title='Search' onPress={performSearch}/>
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodItem item={item} />}
        contentContainerStyle={{
          gap: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap:10
  },
  inputContainer:{
    flexDirection:"row",
    backgroundColor:"#f2f2f2",
    borderRadius:20,
    padding:10,
  },
  textInput: {
    flex:1,
    padding:10

  },
});
