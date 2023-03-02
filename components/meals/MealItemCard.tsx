import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import { IMeal } from "../../models/meal";

interface IMealItem {
  item: IMeal;
  imageStyles?: StyleProp<ImageStyle>;
  textStyles?: StyleProp<TextStyle>;
}

const MealItemCard: React.FC<IMealItem> = ({
  item,
  imageStyles,
  textStyles,
}) => {
  const { imageUrl, title, duration, complexity, affordability } = item;

  return (
    <>
      <Image style={[styles.image, imageStyles]} source={{ uri: imageUrl }} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, textStyles]}>{title}</Text>
        <View style={styles.details}>
          <Text style={[styles.detailItem, textStyles]}>{duration}m</Text>
          <Text style={[styles.detailItem, textStyles]}>
            {complexity.toUpperCase()}
          </Text>
          <Text style={[styles.detailItem, textStyles]}>
            {affordability.toUpperCase()}
          </Text>
        </View>
      </View>
    </>
  );
};

export default MealItemCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    textAlign: "center",
    margin: 6,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
});
