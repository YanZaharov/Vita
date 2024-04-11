import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { useVitaminStore } from '../store/vitaminStore'
import { globalStyles } from '../styles/globalStyles'

// Функция для форматирования даты в формате ДД.ММ.ГГГГ
const formatDate = date => {
	return date.toLocaleDateString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
}

const AddEditVitaminScreen = ({ navigation, route }) => {
	const { vitaminId } = route.params || {}
	const isEdit = Boolean(vitaminId)
	const { addVitamin, updateVitamin, vitamins } = useVitaminStore()
	const [name, setName] = useState('')
	const [dosage, setDosage] = useState('')
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [color, setColor] = useState('red')
	const [showStartDatePicker, setShowStartDatePicker] = useState(false)
	const [showEndDatePicker, setShowEndDatePicker] = useState(false)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: isEdit ? 'Редактировать витамин' : 'Добавить новый витамин',
		})
	}, [navigation, isEdit])

	useEffect(() => {
		if (isEdit && vitamins) {
			const vitamin = vitamins.find(v => v.id === vitaminId)
			if (vitamin) {
				setName(vitamin.name || '')
				setDosage(vitamin.dosage || '')
				setStartDate(new Date(vitamin.startDate) || new Date())
				setEndDate(new Date(vitamin.endDate) || new Date())
				setColor(vitamin.color || 'red')
			}
		}
	}, [vitaminId, vitamins])

	const onDateChange = (event, selectedDate, type) => {
		if (type === 'start') {
			setShowStartDatePicker(false)
			if (selectedDate) {
				setStartDate(selectedDate)
			}
		} else {
			setShowEndDatePicker(false)
			if (selectedDate) {
				setEndDate(selectedDate)
			}
		}
	}

	const handleSave = () => {
		const vitaminData = {
			id: isEdit ? vitaminId : Date.now().toString(), // Простое генерирование ID, замените на более подходящий метод
			name,
			dosage,
			startDate: startDate.toISOString(), // Сохраняем дату в виде строки в формате ISO
			endDate: endDate.toISOString(), // Тоже самое с endDate
			color,
		}

		if (isEdit) {
			updateVitamin(vitaminId, vitaminData)
		} else {
			addVitamin(vitaminData)
		}

		navigation.goBack()
	}

	return (
		<View style={globalStyles.container}>
			<TextInput
				style={globalStyles.input}
				value={name}
				onChangeText={setName}
				placeholder='Название витамина'
			/>
			<TextInput
				style={globalStyles.input}
				value={dosage}
				onChangeText={setDosage}
				keyboardType='numeric'
				placeholder='Дозировка'
			/>
			<Button
				title={`Дата начала: ${
					startDate ? formatDate(startDate) : 'не выбрана'
				}`}
				onPress={() => setShowStartDatePicker(true)}
			/>
			{showStartDatePicker && (
				<DateTimePicker
					value={startDate}
					mode='date'
					display='default'
					onChange={(event, selectedDate) =>
						onDateChange(event, selectedDate, 'start')
					}
				/>
			)}

			<Button
				title={`Дата окончания: ${
					endDate ? formatDate(endDate) : 'не выбрана'
				}`}
				onPress={() => setShowEndDatePicker(true)}
			/>
			{showEndDatePicker && (
				<DateTimePicker
					value={endDate}
					mode='date'
					display='default'
					onChange={(event, selectedDate) =>
						onDateChange(event, selectedDate, 'end')
					}
				/>
			)}
			<Picker
				selectedValue={color}
				onValueChange={setColor}
				style={styles.pickerStyle}
			>
				<Picker.Item label='Красный' value='red' />
				<Picker.Item label='Синий' value='blue' />
				<Picker.Item label='Зелёный' value='green' />
				{/* Добавьте другие цвета по необходимости */}
			</Picker>
			<Button title='Сохранить витамин' onPress={handleSave} />
		</View>
	)
}

const styles = StyleSheet.create({
	pickerStyle: {
		width: '100%',
		height: 50,
	},
	// Добавьте любые дополнительные стили, если это необходимо
})

export default AddEditVitaminScreen
