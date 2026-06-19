import AsyncStorage from "@react-native-async-storage/async-storage";

const MOOD_KEY = "planner_mood";

export async function saveMood(mood) {
  try {
    await AsyncStorage.setItem(
      MOOD_KEY,
      JSON.stringify(mood)
    );
  } catch (error) {
    console.log(error);
  }
}

export async function loadMood() {
  try {
    const mood = await AsyncStorage.getItem(
      MOOD_KEY
    );

    return mood ? JSON.parse(mood) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
