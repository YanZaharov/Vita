import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const CustomInput = ({ value, onChangeText, placeholder, keyboardType }) => {
	return (
		<TextInput
			style={styles.input}
			onChangeText={onChangeText}
			value={value}
			placeholder={placeholder}
			keyboardType={keyboardType}
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		padding: 12,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		marginVertical: 10,
		backgroundColor: 'white',
	},
})

export default CustomInput
