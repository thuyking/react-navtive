import { View, Text } from "react-native";
import React from "react";
<<<<<<< HEAD

const insight = () => {
  return (
    <View>
      <Text>insight</Text>
    </View>
=======
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);
const insight = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background p-5">
      <Text>insight</Text>
    </SafeAreaView>
>>>>>>> master
  );
};

export default insight;
