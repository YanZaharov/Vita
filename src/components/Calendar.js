import React from 'react'
import { Calendar } from 'react-native-calendars'

const CustomCalendar = ({ markedDates, onSelectDate }) => {
	return (
		<Calendar
			markedDates={markedDates}
			onDayPress={day => onSelectDate(day.dateString)}
		/>
	)
}

export default CustomCalendar
