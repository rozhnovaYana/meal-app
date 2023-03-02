import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoryScreenNavigationProp } from "../../types/navigation-types";

interface ICategory {
  item: {
    title: string;
    color: string;
    id: string;
  };
}

const Category: React.FC<ICategory> = ({ item }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<CategoryScreenNavigationProp["navigation"]>();
  const onPress = () => {
    navigation.navigate("Category", {
      categoryid: item.id,
      categoryTitle: item.title
    });
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: item.color }]}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.8 : 1,
            height: (width - 20) / 2,
          },
          styles.titleWrapper,
        ]}
        onPress={onPress}
      >
        {({ pressed }) => (
          <Text style={[styles.title, pressed && styles.titlePressed]}>
            {item.title}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    backgroundColor: "white",
    borderRadius: 8
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    overflow: 'hidden'
  },
  title: {
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    fontSize: 20,
  },
  titlePressed: {
    fontSize: 18,
  },
});
