import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from "react-native";

import MoodSelector from "../components/MoodSelector";

import {
  saveMood,
  getMood
} from "../storage/storage";

export default function PlannerScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [mood, setMood] = useState("");

  useEffect(() => {
    async function loadMood() {
      const savedMood = await getMood();

      if (savedMood) {
        setMood(savedMood);
      }
    }

    loadMood();
  }, []);

  async function selectMood(selectedMood) {
    setMood(selectedMood);

    await saveMood(selectedMood);
  }

  function addTask() {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title: task
      }
    ]);

    setTask("");
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20
        }}
      >
        Your Planner v1.1 RC1
      </Text>

      <Text
        style={{
          fontSize: 20,
          marginBottom: 10
        }}
      >
        Today's Mood
      </Text>

      <MoodSelector
        selectedMood={mood}
        onSelectMood={selectMood}
      />

      <TextInput
        placeholder="Add a task..."
        value={task}
        onChangeText={setTask}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />

      <Button
        title="Add Task"
        onPress={addTask}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={{
              marginTop: 10,
              fontSize: 18
            }}
          >
            • {item.title}
          </Text>
        )}
      />
    </View>
  );
}
