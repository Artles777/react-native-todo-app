import React, {useState} from "react";
import {View, StyleSheet, TextInput, Alert} from "react-native";
import Button from "react-native-button"
import IconButton from "react-native-vector-icons/Ionicons";
import {LinearGradient} from "expo-linear-gradient";
import {borderColor, buttonLinerGradient, inputColor} from "../../styles/colors";

const AddTodo = ({onAddTodo}) => {
	const [textTodo, setTextTodo] = useState('')

	const onChangeTasks = () => {
		if (textTodo.trim()) {
			onAddTodo(textTodo)
			setTextTodo('')
		} else {
			Alert.alert('Вы не ввели название задачи!', 'Введите новую задачу.')
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				value={textTodo}
				onChangeText={setTextTodo}
				style={styles.input}
				onSubmitEditing={onChangeTasks}
				placeholder="Введите новую задачу"
				autoCorrect={false}
			/>
			<Button style={styles.button} onPress={onChangeTasks}>
				<LinearGradient style={styles.linearGradient} colors={buttonLinerGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
					<IconButton style={styles.icon} name="md-add-outline" />
				</LinearGradient>
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#ccc',
		backgroundColor: inputColor,
		paddingHorizontal: 8,
		height: 'auto',
	},
	input: {
		width: '85%',
		height: 35,
		borderStyle: 'solid',
		borderWidth: 2,
		borderRadius: 4,
		borderColor: borderColor,
		margin: 8,
		padding: 10
	},
	button: {

	},
	icon: {
		fontSize: 24,
		padding: 6,
		zIndex: 10,
		color: 'white'
	},
	linearGradient: {
		backgroundColor: inputColor,
		borderRadius: 9999,
	}
})

export default AddTodo;
