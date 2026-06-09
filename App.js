import React from "react";
import { SafeAreaView } from "react-native";

import PlannerScreen from "./src/screens/PlannerScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PlannerScreen />
    </SafeAreaView>
  );
}
