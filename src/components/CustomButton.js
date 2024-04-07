import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.button}>
		<Text style={styles.text}>{title}</Text>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#3f72af',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 15,
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
})

export default CustomButton
