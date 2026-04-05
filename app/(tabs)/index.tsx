import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="">
        {" "}
        Go to onboarding
      </Link>
      <Link href="/SignIn">Sign In</Link>
      <Link href="/SignUp">Sign Up</Link>
      <Link href="/(tabs)/subscriptions/thuy">test</Link>
      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "thuy2" },
        }}
      >
        {" "}
        test 2
      </Link>
    </View>
  );
}
