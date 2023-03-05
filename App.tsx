import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  HomeStackNavigatorParamList,
  TabsNavigatorParamList,
} from "./types/navigation-types";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import MealScreen from "./screens/MealScreen";

SplashScreen.preventAutoHideAsync();

const { Navigator, Screen } =
  createNativeStackNavigator<HomeStackNavigatorParamList>();
const DrawerNavigator = createDrawerNavigator<TabsNavigatorParamList>();

const CategoriesDrawer = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#35241a",
        },
        headerTintColor: "#f0f0f0",
        sceneContainerStyle: {
          backgroundColor: "#463931",
        },
        drawerContentStyle: {
          backgroundColor: "#463931",
        },
        drawerContentContainerStyle: {
          flex: 1,
          paddingTop: 70
        },
        drawerActiveTintColor: "#f0f0f0",
        drawerInactiveTintColor: "white",
      }}
    >
      <DrawerNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-circle" size={size} color={color} />
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="Favourites"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      >
        {() => <Text>Favourites</Text>}
      </DrawerNavigator.Screen>
    </DrawerNavigator.Navigator>
  );
};
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
            },
          }}
        >
          <Screen
            name="CategoriesDrawer"
            component={CategoriesDrawer}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Screen name="Category" component={CategoryScreen} />
          <Screen name="Meal" component={MealScreen} />
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
