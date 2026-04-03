import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View>
      <Text>HomePage</Text>
      <Link href="/(auth)/Login">Go to Login</Link>
    </View>
  );
};

export default HomePage;
