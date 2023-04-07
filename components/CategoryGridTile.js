import React from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CategoryGridTile = ({ title, color, onClick }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        android_ripple={{ color: "#ccc" }}
        onPress={onClick}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: deviceWidth < 380 ? 12 : 16,
    height: deviceWidth < 380 ? 75 : 150,
    borderRadius: 8,
    elevation: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    // for shadow to work in ios we need to have a backgroundColor
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  button: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 8 : 15,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "josefin-sans-bold",
    fontSize: 18,
  },

  pressed: {
    opacity: 0.75,
  },
});

export default CategoryGridTile;
