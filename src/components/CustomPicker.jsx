import React from 'react'
import { Picker, StyleSheet, View } from 'react-native'

const CustomPicker = ({ data, onValueChange }) => {
	return (
		<View style={styles.pickerContainer}>
			<Picker onValueChange={onValueChange}>
				{data.map(item => (
					<Picker.Item key={item.value} label={item.label} value={item.value} />
				))}
			</Picker>
		</View>
	)
}

const styles = StyleSheet.create({
	pickerContainer: {
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		marginVertical: 8,
	},
})

export default CustomPicker
