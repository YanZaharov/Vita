import DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const DatePicker = ({ onChange, value }) => {
	return (
		<View style={styles.container}>
			<DateTimePicker
				value={value}
				mode='date'
				display='default'
				onChange={onChange}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
})

export default DatePicker
