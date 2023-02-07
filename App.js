import { StatusBar } from 'expo-status-bar';
import BottomTabNavigator from "./src/routes/BottomTabNavigator"
import { AuthContextProvider } from './src/contexts/AuthContextProvider';

export default function App() {

  return (
    <AuthContextProvider>
      <BottomTabNavigator>
      </BottomTabNavigator>
      <StatusBar style="auto" />
    </AuthContextProvider>
  );
}