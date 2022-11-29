import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Button } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";

import { collection, getDocs } from "firebase/firestore";
import firebase from "../database/firebase";

const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
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
    getUsers();
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create user"
        onPress={() => props.navigation.navigate("CreateUser")}
      />

      {users.map((user) => {
        return (
          <ListItem.Swipeable
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate('UserDetail', { userId: user.id });
            }}
          > 
            <Avatar
              source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
              rounded
            />
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem.Swipeable>
        );
      })}
    </ScrollView>
  );
};

export default UsersList;
