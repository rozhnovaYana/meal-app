import { useLayoutEffect, useState, useContext, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DetailsList from "../components/meals/DetailsList";
import MealItemCard from "../components/meals/MealItemCard";
import type { MealScreenNavigationProp } from "../types/navigation-types";
import {
  FavouritesContext,
  IFavouritesProps,
} from "../store/context/Favourites";

const MealScreen = ({ route, navigation }: MealScreenNavigationProp) => {
  const { ids, addFavourite, removeFavourite } =
    useContext<IFavouritesProps>(FavouritesContext);

  const { item } = route.params;
  const { width } = useWindowDimensions();
  const isInWishListInitial = ids.includes(item.id);
  const [ isInWishList, setWishlist ]= useState(isInWishListInitial)

  const onToggleWishList = () => {
    setWishlist(state => {
      state ? removeFavourite(item.id) : addFavourite(item.id);
      return !state
    })
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerRight: () => (
        <Pressable onPress={onToggleWishList}>
          <Ionicons
            name={isInWishList ? "heart" : "heart-outline"}
            size={24}
            color="#e3b9a9"
          />
        </Pressable>
      ),
    });
  }, [navigation, item.title, onToggleWishList]);

  return (
    <ScrollView style={styles.wrapper}>
      <MealItemCard
        item={item}
        imageStyles={{ height: width }}
        textStyles={styles.textStyles}
      />
      <View style={styles.detailsWrapper}>
        <DetailsList property={item.ingredients} title="Ingredients" />
        <DetailsList property={item.steps} title="Steps" />
      </View>
    </ScrollView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  detailsWrapper: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  textStyles: {
    color: "white",
  },
});
