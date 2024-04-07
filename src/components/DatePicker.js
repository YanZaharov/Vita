import DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'

const DatePicker = ({ date, onChangeDate }) => (
	<DateTimePicker
		value={date}
		mode='date'
		display='default'
		onChange={(event, selectedDate) => onChangeDate(selectedDate)}
	/>
)

export default DatePicker
