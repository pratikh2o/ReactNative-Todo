import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const onSubmit = (todoL) => {
    setTodoList([
      ...todoList,
      { todotext: todoL, id: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.container}>
      <TodoInput addTodo={onSubmit} />
      <TodoList todoList={todoList} />
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
