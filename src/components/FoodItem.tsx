import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const FoodItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
    <View style={{flex:1,gap:10}}>
    <Text style={styles.itemName}>{item.food.label}</Text>
    <Text style={styles.itemCal}>{item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}</Text>
    </View>
  <AntDesign name="pluscircleo" size={24} color="royalblue" />
  </View>
  )
}

export default FoodItem

const styles = StyleSheet.create({
     
  itemContainer: {
    flexDirection:"row",
    backgroundColor: '#f6f6f8',
    alignItems:"center",
    padding: 10,
    borderRadius:10,
    gap:10

  },
  itemName:{
    fontWeight:"bold",
    fontSize:16
  },
  itemCal:{
    color:"dimgray"
  }
})