import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealsExtraInfo from "./MealsExtraInfo";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onClick,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onClick}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealsExtraInfo
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontFamily: "josefin-sans-medium",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});

export default MealItem;
