import React from "react";
import {View, Text, StyleSheet} from "react-native";
import IconBar from "react-native-vector-icons/FontAwesome5";
import {LinearGradient} from "expo-linear-gradient";
import {toolbarLinearGradient} from "../../styles/colors";

const Toolbar = () => {
	const icons = [
		{ name: 'tasks', text: 'Задачи' },
		{ name: 'calendar', text: 'Календарь' },
		{ name: 'cog', text: 'Настройки' }
	]
	return (
		<LinearGradient colors={toolbarLinearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
			<View style={styles.container}>
				{icons.map((el, idx) => (
					<View key={idx} style={styles.wrapper}>
						<IconBar name={el.name} style={styles.icon}/>
						<Text style={styles.description}>{el.text}</Text>
					</View>
				))}
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 56,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		fontSize: 16,
		color: 'white'
	},
	description: {
		color: 'white'
	}
})

export default Toolbar;
