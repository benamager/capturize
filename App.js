import { StatusBar } from 'expo-status-bar';
import BottomTabNavigator from "./src/routes/BottomTabNavigator"
import SplashScreen from 'expo-splash-screen';

export default function App() {

  return (
    <>
      <BottomTabNavigator>
      </BottomTabNavigator>
      <StatusBar style="auto" />
    </>
  );
}