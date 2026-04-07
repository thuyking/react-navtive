import { View, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

const SubscriptionsDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscriptions Detail: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
};

export default SubscriptionsDetail;
