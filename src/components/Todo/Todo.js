import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Alert} from "react-native";
import IconCheck from "react-native-vector-icons/Ionicons";
import {completedTaskColor} from "../../styles/colors";
import Button from "react-native-button";

const Todo = ({title, id, onRemoveTodo}) => {
	const [isEnabled, setIsEnabled] = useState(false);

	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	const flattenTodo = StyleSheet.flatten([
		styles.todoItem,
		isEnabled ? styles.completed : ''
	]);

	const removeTodoLong = () => {
		Alert.alert('Вы действительно хотите удалить задачу?', '', [
			{
				text: 'Да',
				onPress: () => onRemoveTodo(id),
			},
			{
				text: 'Нет'
			}
		])
	}

	return (
		<TouchableWithoutFeedback onLongPress={removeTodoLong}>
			<View style={styles.todo} onResponderMove={() => console.log('move')}>
				<Button onPress={toggleSwitch}>
					<IconCheck
						style={[styles.check, isEnabled ? {color: completedTaskColor} : {color: '#000'}]}
						name={!isEnabled ? 'square-outline' : 'md-checkbox'}
					/>
				</Button>
				<Text style={flattenTodo}>{title}</Text>
				{
					isEnabled &&
					<Button onPress={() => onRemoveTodo(id)}>
						<IconCheck
							style={styles.close}
							name="close-circle-sharp"
						/>
					</Button>
				}
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	todoItem: {
		fontSize: 16,
		color: 'black',
		width: '91.5%'
	},
	check: {
		fontSize: 24,
	},
	completed: {
		textDecorationLine: 'line-through',
		color: completedTaskColor,
		width: '85%'
	},
	close: {
		fontSize: 20,
		marginTop: 4,
		color: completedTaskColor,
	},
	alertYes: {
		backgroundColor: 'red'
	}
})

export default Todo;
