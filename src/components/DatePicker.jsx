import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

const DatePicker = ({ onChange, value, minimumDate, maximumDate, label }) => {
	const [show, setShow] = useState(false)

	const onChangeInternal = (event, selectedDate) => {
		const currentDate = selectedDate || value
		setShow(Platform.OS === 'ios')
		onChange(currentDate)
	}

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}
			{Platform.OS === 'android' && (
				<Button
					onPress={() => setShow(true)}
					title={label || 'Выберите дату'}
				/>
			)}

			{(Platform.OS === 'ios' || show) && (
				<DateTimePicker
					value={value}
					mode='date'
					display='default'
					onChange={onChangeInternal}
					minimumDate={minimumDate}
					maximumDate={maximumDate}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	label: {
		fontSize: 16,
		color: '#000',
		marginBottom: 8,
	},
})

export default DatePicker
