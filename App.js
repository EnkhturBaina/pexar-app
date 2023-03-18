import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { UserStore } from "./src/contexts/MainContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreenTabNavigation from "./src/navigations/HomeScreenTabNavigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <UserStore>
          <PaperProvider>
            <HomeScreenTabNavigation />
          </PaperProvider>
        </UserStore>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
