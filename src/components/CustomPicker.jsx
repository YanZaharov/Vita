import React from 'react'
import { Picker, StyleSheet, View } from 'react-native'

const CustomPicker = ({ selectedValue, onValueChange, items }) => {
	return (
		<View style={styles.pickerContainer}>
			<Picker
				selectedValue={selectedValue}
				onValueChange={onValueChange}
				mode='dropdown'
			>
				{items.map((item, index) => (
					<Picker.Item key={index} label={item.label} value={item.value} />
				))}
			</Picker>
		</View>
	)
}

const styles = StyleSheet.create({
	pickerContainer: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		marginVertical: 10,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
})

export default CustomPicker
