import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress, title, buttonStyle, textStyle, disabled }) => {
	// buttonStyle и textStyle позволяют перезаписать или дополнить базовые стили
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, buttonStyle]}
			disabled={disabled} // Опциональная блокировка кнопки
		>
			<Text style={[styles.text, textStyle]}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#9E5DDA',
		padding: 12,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		opacity: 1, // Полная видимость для обычного состояния
	},
	text: {
		color: 'white',
		fontSize: 18,
		fontWeight: '500',
	},
})

export default CustomButton
