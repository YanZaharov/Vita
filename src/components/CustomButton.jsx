import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress, title }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#9E5DDA', // Выбранный цвет кнопки
		padding: 12,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
	},
	text: {
		color: 'white',
		fontSize: 18,
		fontWeight: '500',
	},
})

export default CustomButton
