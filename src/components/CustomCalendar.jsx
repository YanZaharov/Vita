import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar } from 'react-native-calendars'

const CustomCalendar = ({ markedDates, onDayPress }) => {
	return (
		<View style={styles.container}>
			<Calendar
				markedDates={markedDates}
				onDayPress={onDayPress}
				// Другие необходимые настройки и свойства
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// Ваши стили для контейнера календаря
	},
})

export default CustomCalendar
