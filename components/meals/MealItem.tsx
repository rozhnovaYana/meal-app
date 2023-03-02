import { useNavigation } from "@react-navigation/native";
import { View, Pressable, StyleSheet } from "react-native";
import { IMeal } from "../../models/meal";
import MealItemCard from "./MealItemCard";
import type { MealScreenNavigationProp } from "../../types/navigation-types";

interface IMealItem {
  item: IMeal;
}

const MealItem: React.FC<IMealItem> = ({ item }) => {
  const navigation = useNavigation<MealScreenNavigationProp["navigation"]>();

  const onPress = () => {
    navigation.navigate("Meal", { item });
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.pressableArea} onPress={onPress}>
        <MealItemCard item={item} />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    backgroundColor: "white",
    borderRadius: 8,
    paddingBottom: 10,
  },
  pressableArea: {
    borderRadius: 8,
    overflow: "hidden",
  },
});
