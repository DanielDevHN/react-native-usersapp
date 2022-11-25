import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CreateUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChandeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

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
        <Button title="Create User" onPress={() => console.log(state)}/>
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
