<<<<<<< HEAD
import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/Login"
        className="border bg-black text-white py-2.5 px-1 rounded-md"
      >
        Go to the Login
      </Link>
      <Link
        href="/Register"
        className="border bg-black text-white py-2.5 px-1 rounded-md"
      >
        Go to the Register
      </Link>
      <Link
        href="/HomePage"
        className="border bg-black text-white py-2.5 px-1 rounded-md"
      >
        Go to the HomePage
      </Link>
      <Link href="/subscriptions/thuy1">Thuy</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "thuy3" },
        }}
      >
        thuy subscription
      </Link>
    </View>
  );
=======
import { Redirect } from "expo-router";
import "@/global.css";
export default function Index() {
  return <Redirect href="/(tabs)" />;
>>>>>>> master
}
