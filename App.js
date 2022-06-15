import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isModel, setIsModel] = useState(false);

  const onSubmit = (todoL) => {
    setTodoList([
      ...todoList,
      { todotext: todoL, id: Math.random().toString() },
    ]);
  };

  const viewModel = () => {
    setIsModel(true);
  };

  const closeModel = () => {
    setIsModel(false);
  };

  const deleteTodo = (id) => {
    setTodoList((todo) => {
      return todoList.filter((val) => {
        return val.id !== id;
      });
    });
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          marginBottom: 30,
        }}
      >
        Todo Manager
      </Text>
      <Button title="Add new Todo" color={"#5e0acc"} onPress={viewModel} />
      {isModel && (
        <TodoInput
          closeModel={closeModel}
          visible={isModel}
          addTodo={onSubmit}
        />
      )}
      <Text
        style={{
          color: "white",
          marginTop: 30,
          fontWeight: "bold",
          marginLeft: 5,
        }}
      >
        List of Todo....
      </Text>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      {todoList.length > 0 && (
        <Text style={{ color: "white" }}>Tap to Delete</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "black",
  },
});
