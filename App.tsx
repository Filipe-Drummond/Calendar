import {
  useFonts,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { Calendar } from "./src/pages/Calendar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {fontsLoaded && <Calendar />}
    </View>
  );
}
