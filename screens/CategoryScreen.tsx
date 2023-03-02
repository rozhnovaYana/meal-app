import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/meals/MealItem";
import { MEALS } from "../data/dummy-data";
import { CategoryScreenNavigationProp } from "../types/navigation-types";

const CategoryScreen = ({
  route,
  navigation,
}: CategoryScreenNavigationProp) => {
  const { categoryid, categoryTitle } = route.params;
  const meals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryid) > -1;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);
  
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.flatlist}
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
