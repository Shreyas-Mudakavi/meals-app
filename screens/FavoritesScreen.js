import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import MealsList from "../components/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  //   const favoriteMealsCtx = useContext(FavoritesContext);
  const { ids } = useSelector((state) => state.favoriteMeal);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites yet.</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "josefin-sans-bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default FavoritesScreen;
