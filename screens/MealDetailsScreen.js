import React, { useContext, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealsExtraInfo from "../components/MealsExtraInfo";
import BottomContainerTitle from "../components/BottomContainerTitle";
import MealDetailsList from "../components/MealDetailsList";
import IconBtn from "../components/IconBtn";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  //   const favoriteMealCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const { ids } = useSelector((state) => state.favoriteMeal);
  const dispatch = useDispatch();

  //   const mealIsFav = favoriteMealCtx.ids.includes(mealId);
  const mealIsFav = ids.includes(mealId);

  const headerBtnHandler = () => {
    if (mealIsFav) {
      //   favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
      //   favoriteMealCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    const mealTitle = MEALS?.find((meal) => meal.id === mealId).title;

    navigation.setOptions({
      title: mealTitle,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 17,
      },
      headerRight: () => {
        return (
          <IconBtn
            onClick={headerBtnHandler}
            icon={mealIsFav ? "star" : "star-border"}
            color="#fff"
          />
        );
      },
    });
  }, [mealId, navigation, headerBtnHandler]);

  const selectedMeal = MEALS?.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealsExtraInfo
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          // style={styles.extraInfo}
          textStyle={styles.extraInfoText}
        />

        <View style={styles.bottomContainer}>
          <BottomContainerTitle>Ingredients</BottomContainerTitle>
          <MealDetailsList data={selectedMeal.ingredients} />

          <BottomContainerTitle>Steps</BottomContainerTitle>
          <MealDetailsList data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    margin: 16,
    alignItems: "center",
  },
  image: { width: "100%", height: 300 },
  title: {
    fontSize: 24,
    margin: 8,
    fontFamily: "josefin-sans-bold",
    textAlign: "center",
    color: "#fff",
  },
  extraInfoText: {
    color: "#ccc",
    fontSize: 14,
  },

  bottomContainer: {
    width: "80%",
  },
});

export default MealDetailsScreen;
