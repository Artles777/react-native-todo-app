import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./src/components/Navbar/Navbar";
import AddTodo from "./src/components/AddTodo/AddTodo";
import TodoList from "./src/components/TodoList/TodoList";
import Toolbar from "./src/components/Toolbar/Toolbar";

export default function App() {
	const [title, setTitle] = useState('Все задачи')
	const [tasks, setTasks] = useState([])

	const addTodo = (title) => {
		setTasks(prevTodo => [...prevTodo, { id: Date.now().toString(), title: title.trim(), completed: false }])
	}

	const removeTodo = (id) => {
		setTasks(prevState => prevState.filter(item => item.id !== id))
	}

  return (
    <View style={styles.container}>
			<Navbar title={title}/>
			<TodoList tasks={tasks} onRemoveTodo={removeTodo}/>
			<AddTodo onAddTodo={addTodo}/>
			<Toolbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	justifyContent: 'space-between',
		height: '100%'
	}
});
