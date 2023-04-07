import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsExtraInfo = ({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.extraInfo, style]}>
      <Text style={[styles.extraInfoText, textStyle]}>{duration}m</Text>
      <Text style={[styles.extraInfoText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.extraInfoText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  extraInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  extraInfoText: {
    marginHorizontal: 4,
    fontSize: 12,
    fontFamily: "josefin-sans-semi-bold",
  },
});

export default MealsExtraInfo;
