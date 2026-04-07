import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="">
        {" "}
        Go to onboarding
      </Link>
      <Link href="/SignIn">Sign In</Link>
      <Link href="/SignUp">Sign Up</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "thuy2" },
        }}
      >
        test 2
      </Link>
    </SafeAreaView>
  );
}
