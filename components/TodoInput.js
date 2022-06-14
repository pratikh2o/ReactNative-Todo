import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

const TodoInput = (props) => {
  const [todo, setTodo] = useState("");

  const handleInput = (value) => {
    setTodo(value);
  };

  const submit = () => {
    props.addTodo(todo);
    setTodo("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Todo"
        onChangeText={handleInput}
      />
      <Button title="Add Todo" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 2,
    width: "60%",
    marginRight: 8,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

export default TodoInput;
