import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar } from 'react-native-calendars'

const CustomCalendar = ({ markedDates, onDayPress, selectedDate }) => {
	// Генерируем новые отмеченные даты, добавляя информацию о выбранной дате
	// Переопределяем свойства обьекта, заданного для выбранной даты
	const selectedDay = selectedDate.split('T')[0]
	const markedWithSelected = {
		...markedDates,
		[selectedDay]: {
			...(markedDates[selectedDay] || {}), // сохраняем существующие точки или стили
			selected: true, // отмечаем как выбранный день
			selectedColor: '#00adf5', // цвет для подсветки выбранного дня
		},
	}

	return (
		<View style={styles.container}>
			<Calendar
				markedDates={markedWithSelected}
				onDayPress={onDayPress}
				markingType={'multi-dot'}
				firstDay={1} // неделя начинается с понедельника
				// другие свойства и настройки темы, если они нужны
			/>
		</View>
	)
}

// Ваша текущая тема календаря
const calendarTheme = {
	textSectionTitleColor: '#b6c1cd',
	todayTextColor: '#00adf5',
	dayTextColor: '#2d4150',
	textDisabledColor: '#d9e1e8',
	dotColor: '#00adf5',
	selectedDotColor: '#ffffff',
	arrowColor: 'orange',
	monthTextColor: '#d9e1e8',
	textMonthFontWeight: 'bold',
	textDayFontSize: 16,
	textMonthFontSize: 16,
	textDayHeaderFontSize: 16,
	'stylesheet.calendar.header': {
		week: {
			marginTop: 5,
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	},
	'stylesheet.day.multiDot': {
		dotContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
		dot: {
			width: 5,
			height: 5,
			borderRadius: 2.5,
			margin: 1,
		},
	},
	// ...rest of your theme properties
}

const styles = StyleSheet.create({
	container: {
		// Ваши стили для контейнера календаря
	},
	// ...all your other style definitions
})

export default CustomCalendar
