import React from 'react'
import { Picker, StyleSheet, View } from 'react-native'

const CustomPicker = ({ selectedValue, onValueChange, items }) => (
	<View style={styles.pickerContainer}>
		<Picker selectedValue={selectedValue} onValueChange={onValueChange}>
			{items.map((item, index) => (
				<Picker.Item key={index} label={item.label} value={item.value} />
			))}
		</Picker>
	</View>
)

const styles = StyleSheet.create({
	pickerContainer: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		marginVertical: 10,
	},
})

export default CustomPicker
