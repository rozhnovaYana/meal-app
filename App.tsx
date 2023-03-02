import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { HomeStackNavigatorParamList } from "./types/navigation-types";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import MealScreen from "./screens/MealScreen";

SplashScreen.preventAutoHideAsync();

const { Navigator, Screen } =
  createNativeStackNavigator<HomeStackNavigatorParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#35241a",
            },
            headerTintColor: "#f0f0f0",
            contentStyle: {
              backgroundColor: "#463931",
            }
          }}
        >
          <Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Screen name="Category" component={CategoryScreen} />
          <Screen name="Meal" component={MealScreen}/>
        </Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
