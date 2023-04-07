import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";

SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerType: "slide",
        headerTitleAlign: "center",
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerActiveBackgroundColor: "#e4baa1",
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "#ccc",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          drawerIcon: ({ color, size }) => {
            return <MaterialIcons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <MaterialIcons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "josefin-sans-light": require("./assets/fonts/JosefinSans-Light.ttf"),
    "josefin-sans-bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "josefin-sans-semi-bold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    "josefin-sans-regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "josefin-sans-medium": require("./assets/fonts/JosefinSans-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <View onLayout={onLayoutRootView}> */}
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                // headerTitleAlign: "center",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={{
              //   title: "All Meals",
              //   headerTitleAlign: "center",
              // }}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
      {/* </View> */}
      {/* <SafeAreaView onLayout={onLayoutRootView}> */}
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({});
