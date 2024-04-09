import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import CustomCalendar from '../components/CustomCalendar'
import VitaminItem from '../components/VitaminItem'
import { useVitaminStore } from '../store/vitaminStore'
import { globalStyles } from '../styles/globalStyles'

const CalendarScreen = () => {
	const { vitamins, loadVitamins, removeVitamin } = useVitaminStore()
	const [selectedDate, setSelectedDate] = useState(
		new Date().toISOString().split('T')[0]
	)

	useEffect(() => {
		loadVitamins()
	}, [loadVitamins])

	const filterVitaminsForSelectedDay = (vitamins, date) => {
		return vitamins.filter(vitamin => {
			const start = new Date(vitamin.startDate).setHours(0, 0, 0, 0)
			const end = new Date(vitamin.endDate).setHours(0, 0, 0, 0)
			const selected = new Date(date).setHours(0, 0, 0, 0)
			return selected >= start && selected <= end
		})
	}

	const vitaminsForSelectedDay = filterVitaminsForSelectedDay(
		vitamins,
		selectedDate
	)

	const markedDates = vitamins.reduce((acc, vitamin) => {
		const start = new Date(vitamin.startDate)
		const end = new Date(vitamin.endDate)
		for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
			const dateString = d.toISOString().split('T')[0]
			acc[dateString] = { marked: true }
		}
		return acc
	}, {})

	const handleDayPress = day => {
		setSelectedDate(day.dateString)
	}

	const handleRemoveVitamin = id => {
		Alert.alert(
			'Delete Vitamin',
			'Are you sure you want to remove this vitamin?',
			[
				{ text: 'Cancel' },
				{
					text: 'OK',
					onPress: () => {
						removeVitamin(id)
					},
				},
			]
		)
	}

	return (
		<View style={[globalStyles.container, styles.container]}>
			<CustomCalendar
				selectedDate={selectedDate}
				onDayPress={handleDayPress}
				markedDates={markedDates}
			/>
			<FlatList
				data={vitaminsForSelectedDay}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<VitaminItem
						vitamin={item}
						onDelete={() => handleRemoveVitamin(item.id)}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	// Стили для компонента CalendarScreen, если они вам нужны
})

export default CalendarScreen
