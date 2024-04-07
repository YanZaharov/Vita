import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useVitaminStore } from '../store/vitaminStore'

const AddEditVitaminScreen = ({ route, navigation }) => {
	const { vitaminId } = route.params || {}
	const vitamins = useVitaminStore(state => state.vitamins)
	const addVitamin = useVitaminStore(state => state.addVitamin)
	const updateVitamin = useVitaminStore(state => state.updateVitamin)
	const vitaminToEdit = vitamins.find(vitamin => vitamin.id === vitaminId)

	const [name, setName] = useState(vitaminToEdit?.name || '')
	const [quantity, setQuantity] = useState(
		vitaminToEdit?.quantity.toString() || '0'
	)
	const [unit, setUnit] = useState(vitaminToEdit?.unit || 'mg')
	// Добавьте дополнительные состояния для дат начала и окончания приема витамина.

	// Функция сохранения или обновления витамина
	const handleSaveOrUpdate = () => {
		const vitaminDetails = {
			id: vitaminId ?? Date.now().toString(),
			name,
			quantity,
			unit,
		}

		if (vitaminToEdit) {
			updateVitamin(vitaminDetails)
		} else {
			addVitamin(vitaminDetails)
		}

		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{vitaminToEdit ? 'Редактировать витамин' : 'Добавить витамин'}
			</Text>
			<TextInput
				style={styles.input}
				placeholder='Название витамина'
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={styles.input}
				placeholder='Количество'
				value={quantity}
				onChangeText={setQuantity}
				keyboardType='numeric'
			/>
			{/* Компоненты для выбора единиц измерения и даты */}
			<Button title='Сохранить' onPress={handleSaveOrUpdate} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 15,
	},
	input: {
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 15,
		padding: 10,
		fontSize: 16,
	},
	// Дополнительные стили
})

export default AddEditVitaminScreen
