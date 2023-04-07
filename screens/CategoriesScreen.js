import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const onClickHandler = (data) => {
    navigation.navigate("MealsOverview", {
      categoryId: data.item.id,
    });
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={(data) => {
          return (
            <CategoryGridTile
              title={data.item.title}
              color={data.item.color}
              onClick={() => onClickHandler(data)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        // to display it in grid we can use numColumns prop which
        // accepts number of columns to display data in
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {},
});

export default CategoriesScreen;
