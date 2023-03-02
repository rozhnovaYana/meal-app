import { View, StyleSheet, Text, FlatList } from "react-native";

interface IDetailsListProps {
  property: string[];
  title: string;
}

const DetailsList: React.FC<IDetailsListProps> = ({ property, title }) => {
  return (
    <View style={styles.listWrapper}>
      <View style={styles.listTitleWrapper}>
        <Text style={styles.listTitle}>{title}</Text>
      </View>
      <View style={styles.listItemsWrapper}>
        {property.map((item, index) => {
          return (
            <View style={styles.listItem} key={index}>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DetailsList;

const styles = StyleSheet.create({
  listWrapper: {
    width: "80%",
    justifyContent: "center",
    flex: 1,
  },
  listItemsWrapper: {
    flex: 1,
  },
  listTitleWrapper:{
    marginVertical: 8,
    padding: 4,
    borderBottomColor: "#e3b9a9",
    borderBottomWidth: 2
  },
  listTitle: {
    color: "#e3b9a9",
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    textAlign: "center",
  },
  listItem: {
    backgroundColor: "#e3b9a9",
    padding: 4,
    borderRadius: 6,
    margin: 4,
    alignItems: "center",
    textAlign: 'center'
  },
  listItemText: {
    color: "#35241a",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    textAlign: "center",
  },
});
