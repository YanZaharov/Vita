import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker' // Убедитесь, что пакет установлен
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { useVitaminStore } from '../store/vitaminStore'
import { globalStyles } from '../styles/globalStyles'

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

	const handleSave = () => {
		const vitaminData = {
			id: isEdit ? vitaminId : Date.now().toString(),
			name,
			dosage,
			startDate: startDate.toISOString(),
			endDate: endDate.toISOString(),
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
			{/* Inputs for name and dosage */}
			<TextInput
				style={globalStyles.input}
				value={name}
				onChangeText={setName}
				placeholder='Vitamin Name'
			/>
			<TextInput
				style={globalStyles.input}
				value={dosage}
				onChangeText={setDosage}
				keyboardType='numeric'
				placeholder='Dosage'
			/>

			{/* DateTimePicker for startDate */}
			<Button title='Start Date' onPress={() => setShowStartDatePicker(true)} />
			{showStartDatePicker && (
				<DateTimePicker
					value={startDate}
					mode='date'
					display='default'
					onChange={(event, date) => {
						setShowStartDatePicker(false)
						if (date) setStartDate(date)
					}}
				/>
			)}

			{/* DateTimePicker for endDate */}
			<Button title='End Date' onPress={() => setShowEndDatePicker(true)} />
			{showEndDatePicker && (
				<DateTimePicker
					value={endDate}
					mode='date'
					display='default'
					onChange={(event, date) => {
						setShowEndDatePicker(false)
						if (date) setEndDate(date)
					}}
				/>
			)}

			{/* Picker for selecting color */}
			<Picker
				selectedValue={color}
				onValueChange={setColor}
				style={styles.pickerStyle}
			>
				<Picker.Item label='Red' value='red' />
				<Picker.Item label='Blue' value='blue' />
				<Picker.Item label='Green' value='green' />
				{/* Добавьте другие цвета по необходимости */}
			</Picker>

			{/* Button to save vitamin */}
			<Button title='Save Vitamin' onPress={handleSave} />
		</View>
	)
}

const styles = StyleSheet.create({
	pickerStyle: {
		width: '100%',
		height: 50,
	},
})

export default AddEditVitaminScreen
