import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import type { IMeal } from "../models/meal";
import { NavigatorScreenParams } from "@react-navigation/native";

export type TabsNavigatorParamList = {
  Home: undefined;
  Favourites: undefined;
};
export type HomeStackNavigatorParamList = {
  CategoriesDrawer: NavigatorScreenParams<TabsNavigatorParamList>;
  Category: {
    categoryid: string;
    categoryTitle: string;
  };
  Meal: {
    item: IMeal;
  };
};

export type HomeScreenNavigationProp = DrawerScreenProps<
  TabsNavigatorParamList,
  "Home"
>;
export type CategoryScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  "Category"
>;

export type MealScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  "Meal"
>;
