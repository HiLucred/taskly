import { colors } from "@/constants/colors";
import { Home } from "@/screens/home";
import { StatusBar } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} translucent />
      <Home />
    </>
  );
}
