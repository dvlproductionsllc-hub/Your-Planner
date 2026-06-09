import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const moods = [
  "😊",
  "😐",
  "😔",
  "🔥",
  "😴"
];

export default function MoodSelector({
  selectedMood,
  onSelectMood
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20
      }}
    >
      {moods.map((mood) => (
        <TouchableOpacity
          key={mood}
          onPress={() => onSelectMood(mood)}
        >
          <Text
            style={{
              fontSize:
                selectedMood === mood
                  ? 40
                  : 30
            }}
          >
            {mood}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
