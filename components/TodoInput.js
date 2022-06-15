import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
import { useState } from "react";

const TodoInput = (props) => {
  const [todo, setTodo] = useState("");

  const handleInput = (value) => {
    setTodo(value);
  };

  const submit = () => {
    props.addTodo(todo);
    setTodo("");
    props.closeModel();
  };

  const toggleModel = () => {};

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Todo"
          onChangeText={handleInput}
          value={todo}
        />
        <View style={styles.buttonContainer}>
          <View style={{ margin: 10 }}>
            <Button title="Add Todo" color={"#5e0acc"} onPress={submit} />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              title="Cancel"
              color={"#5e0acc"}
              onPress={props.closeModel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    width: "60%",
    marginRight: 8,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default TodoInput;
