import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UsersList from "./screens/UsersList";
import CreateUser from "./screens/CreateUser";
import UserDetail from "./screens/UserDetail";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
