import React from "react";
import {View, Text, StyleSheet} from "react-native";
import IconMenu from "react-native-vector-icons/MaterialIcons";
import IconFilter from "react-native-vector-icons/Ionicons"
import {LinearGradient} from "expo-linear-gradient";
import {basicLinearGradient} from "../../styles/colors";

const Navbar = ({title}) => {
	return (
			<LinearGradient style={styles.linearGradient} colors={basicLinearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
				<View style={styles.navbar}>
					<IconMenu name="menu" style={styles.icon}/>
					<Text style={styles.text}>{title}</Text>
					<IconFilter name="ellipsis-horizontal-circle" style={styles.icon}/>
				</View>
			</LinearGradient>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		paddingBottom: 10,
		flexDirection: 'row',
		paddingHorizontal: 24,
	},
	text: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold'
	},
	icon: {
		fontSize: 24,
		color: 'white'
	},
	linearGradient: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	}
})

export default Navbar;
