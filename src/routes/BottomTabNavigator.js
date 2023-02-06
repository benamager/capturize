import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../views/Home";
import Post from "../views/Post";
import Profile from "../views/Profile";
import Login from "../views/Login";
import Register from "../views/Register";

const Tab = createBottomTabNavigator();

const themeConfig = {
  colors: {
    background: "#121212"
  },
};

// The bottom tab navigator component (routing elements)
export default function BottomTabNavigator() {
  return (
    <NavigationContainer theme={themeConfig}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 90,
            paddingTop: 10,
            backgroundColor: '#1E1E1E',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (rn === "Post") {
              iconName = focused ? "newspaper-sharp" : "newspaper-outline";
            } else if (rn === "Profile") {
              iconName = focused ? "person-circle-sharp" : "person-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? "#00DAC6" : "#AAAAAA"}
              />
            );
          },
          // Hides the appbar
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen
          // options={{
          //   tabBarButton: () => null,
          //   tabBarStyle: { display: "none" },
          // }}
          name="Login"
          component={Login}
        />
        <Tab.Screen
          // options={{
          //   tabBarButton: () => null,
          //   tabBarStyle: { display: "none" },
          // }}
          name="Register"
          component={Register}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};