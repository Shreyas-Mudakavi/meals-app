import React from "react";
import { StyleSheet, Text } from "react-native";

const BottomContainerTitle = ({ children }) => {
  return <Text style={styles.bottomText}>{children}</Text>;
};

const styles = StyleSheet.create({
  bottomText: {
    color: "#e2b497",
    fontSize: 18,
    fontFamily: "josefin-sans-bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

export default BottomContainerTitle;
