import { StyleSheet, Text, View, FlatList } from "react-native";

const TodoList = (props) => {
  return (
    <View style={styles.todoContainer}>
      <FlatList
        data={props.todoList}
        alwaysBounceVertical={true}
        renderItem={(data) => {
          return <Text style={styles.todoList}>{data.item.todotext}</Text>;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 5,
  },
  todoList: {
    color: "white",
    fontWeight: "bold",
    padding: 5,
    backgroundColor: "#5e0acc",
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default TodoList;
