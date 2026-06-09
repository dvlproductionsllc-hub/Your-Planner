import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from "react-native";

export default function PlannerScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

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
