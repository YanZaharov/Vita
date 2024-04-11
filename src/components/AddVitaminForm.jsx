import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useVitaminStore } from '../store/vitaminStore'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'
import DatePicker from './DatePicker'

const AddVitaminForm = ({ navigation, route }) => {
	const { vitaminId } = route.params || {}
	const isEdit = vitaminId !== null

	// Получаем функции и состояния из хранилища
	const { addVitamin, updateVitamin, vitamins } = useVitaminStore()

	// Инициализация состояний
	const [name, setName] = useState('')
	const [dosage, setDosage] = useState('')
	const [date, setDate] = useState(new Date())

	// Заполняем форму данными при редактировании
	useEffect(() => {
		if (isEdit) {
			const vitamin = vitamins.find(v => v.id === vitaminId)
			if (vitamin) {
				setName(vitamin.name)
				setDosage(vitamin.dosage)
				setDate(new Date(vitamin.date))
			}
		}
	}, [vitaminId, vitamins, isEdit])

	const handleSave = () => {
		const vitaminData = {
			name,
			dosage,
			// Форматируем дату в строку для хранения
			date: date.toISOString(),
		}
		if (isEdit) {
			updateVitamin(vitaminId, prev => ({ ...prev, ...vitaminData }))
		} else {
			addVitamin({ ...vitaminData, id: Date.now().toString() })
		}
		navigation.goBack()
	}

	return (
		<View style={styles.form}>
			<CustomInput
				label='Название витамина'
				value={name}
				onChangeText={setName}
			/>
			<CustomInput
				label='Дозировка'
				value={dosage}
				onChangeText={setDosage}
				keyboardType='numeric'
			/>
			<DatePicker
				date={date}
				onChange={(event, selectedDate) => {
					const currentDate = selectedDate || date
					setDate(currentDate)
				}}
			/>
			<CustomButton
				title={isEdit ? 'Обновить витамин' : 'Добавить витамин'}
				onPress={handleSave}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		padding: 16,
	},
	// другие стили, если они нужны
})

export default AddVitaminForm
