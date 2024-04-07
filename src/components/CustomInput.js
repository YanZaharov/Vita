import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const CustomInput = ({ value, onChangeText, placeholder, keyboardType }) => (
	<TextInput
		style={styles.input}
		onChangeText={onChangeText}
		value={value}
		placeholder={placeholder}
		keyboardType={keyboardType}
	/>
)

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 10,
	},
})

export default CustomInput
