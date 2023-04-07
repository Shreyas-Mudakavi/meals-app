import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ displayedMeals }) => {
  const navigation = useNavigation();

  const onClickHandler = (data) => {
    navigation.navigate("MealDetails", {
      mealId: data.item.id,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={(data) => {
          return (
            <MealItem
              title={data.item.title}
              imageUrl={data.item.imageUrl}
              duration={data.item.duration}
              affordability={data.item.affordability}
              complexity={data.item.complexity}
              onClick={() => onClickHandler(data)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
