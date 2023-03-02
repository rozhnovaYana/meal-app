import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { IMeal } from '../models/meal';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Category: {
    categoryid: string,
    categoryTitle: string
  };
  Meal: {
    item: IMeal
  }
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
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

