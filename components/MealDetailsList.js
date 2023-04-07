import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailsList = ({ data }) => {
  return data?.map((dataPoint) => (
    <View key={dataPoint} style={styles.list}>
      <Text style={styles.listItem}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  list: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  listItem: {
    color: "#351401",
    textAlign: "center",
  },
});

export default MealDetailsList;
