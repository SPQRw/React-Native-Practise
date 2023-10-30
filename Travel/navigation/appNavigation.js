import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useDispatch, useSelector } from "react-redux";

import AddExpenseScreen from "../src/screens/AddExpenseScreen";
import AddTripsScreen from "../src/screens/AddTripsScreen";
import HomeScreen from "../src/screens/HomeScreen";
import SignInScreen from "../src/screens/SignInScreen";
import SignUpScreen from "../src/screens/SignUpScreen";
import TripExpensesScreen from "../src/screens/TripExpensesScreen";
import WelcomeScreen from "../src/screens/WelcomeScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { setUser } from "../redux/slice/user";
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (u) => {
    console.log("got user", u);
    dispatch(setUser(u));
  });

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddTrip"
            component={AddTripsScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AddExpense"
            component={AddExpenseScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TripExpenses"
            component={TripExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, presentation: "modal" }}
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, presentation: "modal" }}
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
