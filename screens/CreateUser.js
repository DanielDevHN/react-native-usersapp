import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import firebase from "../database/firebase";


const CreateUser = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChandeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async() => {
    if(state.name === ""){
      alert("Please enter your name");
    } else {
      //Do insert into firebase database
      try {
        const newDoc = await addDoc(collection(firebase.db, 'users'), {
          name: state.name,
          email: state.email,
          phone: state.phone
        })
        props.navigation.navigate('UsersList')
        //alert("User saved successfully")
      } catch (error) {
        alert(error.message)
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          onChangeText={(value) => handleChandeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChandeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone Number"
          onChangeText={(value) => handleChandeText("phone", value)}
        />
      </View>
      <View>
        <Button title="Create User" onPress={() => saveNewUser()}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default CreateUser;
