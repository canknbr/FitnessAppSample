import { Link } from 'expo-router';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import FoodItem from '../components/FoodItem';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useLazyQuery, gql } from '@apollo/client';


const query = gql`
query search($ingr: String) {
  search(ingr: $ingr) {
    text
    hints {
      food {
        label
        brand
        foodId
        nutrients {
          ENERC_KCAL
        }
      
      }
    }
  }
}
`
export default function App() {
  const [searchValue,setSearchValue] = useState("")
  const [runSearch,{loading,error,data}] = useLazyQuery(query,{
    variables:{ingr:searchValue}
  })
const performSearch = () => {
runSearch({variables:{ingr:searchValue}}) 
  setSearchValue("")
}

if(error){
  return <Text>{error.message}</Text>
}
const items = data?.search?.hints  || []
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput value={searchValue} onChangeText={setSearchValue} placeholder='Search' style={styles.textInput} />
      { 
        searchValue &&  <AntDesign name="close" size={16} color="gray" />
      }
      </View>
     {searchValue && <Button title='Search' onPress={performSearch}/>}
     {loading && <ActivityIndicator/>}
      <FlatList
        data={items}
        ListEmptyComponent={()=><Text>Search a food</Text>}
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
