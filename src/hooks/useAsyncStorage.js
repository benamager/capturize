import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// usage example
// const [value, saveData, retrieveData] = useAsyncStorage("myKey");

// useEffect(() => {
//   retrieveData();
// }, []);

// const handleSave = () => {
//   saveData({ someData: "hello" });
// };

// Custom hook to save and retrieve data using react-native-async-storage
const useAsyncStorage = (key) => {
  // State to store the retrieved data
  const [value, setValue] = useState(null);

  // Function to save data to async storage
  const saveData = async (data) => {
    try {
      // Stringify the data and set it in the async storage using the given key
      await AsyncStorage.setItem(key, JSON.stringify(data));
      // Update the state with the saved data
      setValue(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to retrieve data from async storage
  const retrieveData = async () => {
    try {
      // Get the data from the async storage using the given key
      const retrievedValue = await AsyncStorage.getItem(key);
      // Update the state with the retrieved data (parsed from a string)
      setValue(JSON.parse(retrievedValue));
    } catch (error) {
      console.error(error);
    }
  };

  // Return the value, saveData, and retrieveData functions
  return { value, saveData, retrieveData };
};

export default useAsyncStorage;