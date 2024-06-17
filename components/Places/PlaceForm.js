import { useState } from "react";
import { ScrollView, Text, TextInput, View , StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

function PlaceForm(){
   const [enteredTitle, setEnteredTitle] =useState('');
   function changeTitleHandler(){
    setEnteredTitle(enteredTitle);
   }
     return (
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput  
          style={styles.input}
          onChangeText={changeTitleHandler} 
          value={enteredTitle}/>
        </View>
        <ImagePicker />
      </ScrollView>
    );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form:{
    flex: 1,
    padding: 24
  },
  label:{
    fontSize: 18,
    marginBottom: 4,
    fontWeight: 'bold',
    color: Colors.primary500
  },
  input:{
    marginVertical:8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth:2 ,
    backgroundColor: Colors.primary100
  },

});