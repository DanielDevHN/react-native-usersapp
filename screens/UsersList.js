import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import firebase from "../database/firebase";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers(){
      const querySnapshot = await getDocs(collection(firebase.db, "users"));
      const users = [];
      querySnapshot.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    }
    getUsers()
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default UsersList;
