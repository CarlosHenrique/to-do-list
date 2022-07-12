import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ToDo = () => {
  const [task, updateTask] = useState("");
  const [tasks, updateTasks] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      updateTasks([...tasks, task]);
      updateTask("");
    }
  };

  const removeTask = (tasks, item) => {
    updateTasks(tasks.filter((task) => task != item));
  };

  const handleRenderTask = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => removeTask(tasks, item)}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>To-Do List</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.field}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={(text) => updateTask(text)}
            value={task}
          />
          <TouchableWithoutFeedback onPress={handleAdd}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={handleRenderTask}
        />
      </View>
    </SafeAreaView>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    fontSize: 15,
    color: "#333",
    borderRadius: 5,
    flex: 1,
  },
  button: {
    backgroundColor: "#00cc99",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fdfdfd",
  },
  item: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  form: {
    flexDirection: "row",
  },
});
