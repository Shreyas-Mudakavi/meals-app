import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
      headerTitleAlign: "center",
    });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
};

const styles = StyleSheet.create({});

export default MealsOverviewScreen;
