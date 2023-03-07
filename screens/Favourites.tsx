import { View, StyleSheet, FlatList, Text } from "react-native";
import MealItem from "../components/meals/MealItem";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const FavouriteScreen = ({}) => {
  const ids = useSelector((state: RootState) => state.favourites.ids);
  const meals = MEALS.filter((item) => {
    return ids.indexOf(item.id) > -1;
  });

  if (meals.length === 0)
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Your favourites list is empty</Text>
      </View>
    );

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

export default FavouriteScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  text: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    color: "white",
    textAlign: "center",
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
