import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../components/categories/Category";
import { HomeScreenNavigationProp } from "../types/navigation-types";
interface IHomeScreen {
}

const HomeScreen: React.FC<IHomeScreen> = ({ }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <Category item={item} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
