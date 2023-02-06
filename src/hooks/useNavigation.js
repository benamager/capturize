export default function useNavigation({ navigation }) {

  function navigate({ routeName, dispatch }) {
    const resetAction = navigation.reset({
      index: 0,
      routes: [{ name: routeName }],
    });

    // navigate and dispatch existing screen
    if (dispatch === true) {
      navigation.dispatch(resetAction);
      return
    }

    // navigate to new screen
    navigation.navigate(routeName)
  }

  return { navigate }
}