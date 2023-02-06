import { Pressable, Text } from "react-native"

export default function CustomButton({ text, onPress, classes, disabled }) {
  return (
    <Pressable onPress={onPress} disabled={disabled} className={classes}><Text className="w-full text-center font-medium">{text}</Text></Pressable>
  );
}