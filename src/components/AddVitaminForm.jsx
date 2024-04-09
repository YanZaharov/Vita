import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useVitaminStore } from '../store/vitaminStore'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'
import DatePicker from './DatePicker'

const AddVitaminForm = ({ navigation, route }) => {
	const { vitaminId } = route.params || {}
	const isEdit = vitaminId != null
	// Здесь будет код для заполнения начальных данных при редактировании
	const [name, setName] = useState('')
	const [dosage, setDosage] = useState('')
	const [date, setDate] = useState(new Date())

	const { addVitamin, updateVitamin } = useVitaminStore()

	const handleSave = () => {
		const vitaminData = { name, dosage, date }
		if (isEdit) {
			updateVitamin(vitaminId, vitaminData)
		} else {
			addVitamin(vitaminData)
		}
		navigation.goBack()
	}

	return (
		<View style={styles.form}>
			<CustomInput label='Vitamin Name' value={name} onChangeText={setName} />
			<CustomInput label='Dosage' value={dosage} onChangeText={setDosage} />
			<DatePicker
				date={date}
				onChange={(event, selectedDate) => {
					const currentDate = selectedDate || date
					setDate(currentDate)
				}}
			/>
			<CustomButton
				title={isEdit ? 'Update Vitamin' : 'Add Vitamin'}
				onPress={handleSave}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		// Ваши стили для формы
	},
})

export default AddVitaminForm
