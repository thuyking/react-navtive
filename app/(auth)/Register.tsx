import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Register = () => {
  return (
    <View>
      <Text>Register</Text>
      <Link href="/Login">Go to Login</Link>
    </View>
  );
};

export default Register;
