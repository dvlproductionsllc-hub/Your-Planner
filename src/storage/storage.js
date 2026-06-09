import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveMood(mood) {
  await AsyncStorage.setItem(
    "currentMood",
    mood
  );
}

export async function getMood() {
  return await AsyncStorage.getItem(
    "currentMood"
  );
}
