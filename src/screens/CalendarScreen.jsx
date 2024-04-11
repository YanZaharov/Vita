import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import CustomCalendar from '../components/CustomCalendar'
import VitaminItem from '../components/VitaminItem'
import { useVitaminStore } from '../store/vitaminStore'
import { globalStyles } from '../styles/globalStyles'

const CalendarScreen = ({ navigation }) => {
	const { vitamins, loadVitamins, removeVitamin } = useVitaminStore()
	const [selectedDate, setSelectedDate] = useState(
		new Date().toISOString().split('T')[0] // Оставляем так для единообразия markedDates
	)

	useEffect(() => {
		loadVitamins()
	}, [])

	const getUTCDate = dateString => {
		const date = new Date(dateString)
		return new Date(
			Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
		)
	}

	const filterVitaminsForSelectedDay = (vitamins, date) => {
		const selectedUTC = getUTCDate(date)
		return vitamins.filter(vitamin => {
			const startUTC = getUTCDate(vitamin.startDate)
			const endUTC = getUTCDate(vitamin.endDate)
			return selectedUTC >= startUTC && selectedUTC <= endUTC
		})
	}

	const vitaminsForSelectedDay = filterVitaminsForSelectedDay(
		vitamins,
		selectedDate
	)

	const markedDates = vitamins.reduce((acc, vitamin) => {
		let startUTC = dateToUTC(new Date(vitamin.startDate))
		let endUTC = dateToUTC(new Date(vitamin.endDate))

		while (startUTC <= endUTC) {
			let dateString = formatDateToYYYYMMDD(startUTC)

			if (!acc[dateString]) acc[dateString] = { dots: [] }
			if (acc[dateString].dots.length < 5) {
				acc[dateString].dots.push({ color: vitamin.color || '#00adf5' })
			}
			startUTC = new Date(startUTC.setDate(startUTC.getDate() + 1))
		}

		return acc
	}, {})

	const handleDayPress = day => {
		setSelectedDate(day.dateString)
	}

	const handleRemoveVitamin = async id => {
		Alert.alert(
			'Удалить витамин',
			'Вы уверены, что хотите удалить этот витамин?',
			[
				{ text: 'Отмена', style: 'cancel' },
				{
					text: 'Удалить',
					onPress: async () => {
						await removeVitamin(id) // Асинхронно удаляем витамин
						await loadVitamins() // Затем асинхронно загружаем обновленный список витаминов
					},
					style: 'destructive',
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
				firstDay={1} // Начало недели с понедельника
				markingType={'multi-dot'} // Тип маркировки, поддерживающий множественные точки
			/>
			<FlatList
				data={vitaminsForSelectedDay}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<VitaminItem
						vitamin={item}
						onEdit={() =>
							navigation.navigate('AddEditVitamin', { vitaminId: item.id })
						}
						onDelete={() => handleRemoveVitamin(item.id)}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	// ...определения стилей, если необходимы...
	container: {
		flex: 1,
	},
})

const dateToUTC = date => {
	return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
}

const formatDateToYYYYMMDD = date => {
	const y = `${date.getUTCFullYear()}`
	const m = `${date.getUTCMonth() + 1}`.padStart(2, '0')
	const d = `${date.getUTCDate()}`.padStart(2, '0')
	return `${y}-${m}-${d}`
}

export default CalendarScreen
