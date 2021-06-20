import React from "react";
import {StyleSheet, ScrollView, FlatList} from "react-native";
import Todo from "../Todo/Todo";

const TodoList = ({tasks, onRemoveTodo}) => {
	return (
		<FlatList
			style={styles.container}
			data={tasks}
			renderItem={({item}) => <Todo title={item.title} id={item.id} onRemoveTodo={onRemoveTodo}/>}
			keyExtractor={item => item.id}
			showsVerticalScrollIndicator={false}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 8,
		flexGrow: 1,
	}
})

export default TodoList;
