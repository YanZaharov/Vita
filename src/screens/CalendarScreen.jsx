import React from 'react'
import { View } from 'react-native'
import CustomCalendar from '../components/CustomCalendar'
import { useVitaminStore } from '../store/vitaminStore'
import { globalStyles } from '../styles/globalStyles'
import { formatCalendarMarkedDates } from '../utils/calendarHelpers'

const CalendarScreen = ({ navigation }) => {
	const vitamins = useVitaminStore(state => state.vitamins)
	const markedDates = formatCalendarMarkedDates(vitamins)

	const handleDayPress = day => {
		navigation.navigate('AddEditVitamin', { date: day.dateString })
	}

	return (
		<View style={globalStyles.container}>
			<CustomCalendar markedDates={markedDates} onDayPress={handleDayPress} />
		</View>
	)
}

export default CalendarScreen
