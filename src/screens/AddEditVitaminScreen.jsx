import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from '../components/CustomButton' // Удостоверьтесь, что этот компонент импортирован
import { useVitaminStore } from '../store/vitaminStore'
import { globalStyles } from '../styles/globalStyles'

const AddEditVitaminScreen = ({ route, navigation }) => {
	const vitaminId = route.params?.vitaminId
	const isEdit = Boolean(vitaminId) // Булев флаг для проверки, редактируем мы или добавляем витамин
	const [name, setName] = useState('')
	const [dosage, setDosage] = useState('')

	const { addVitamin, updateVitamin, vitamins } = useVitaminStore()

	// Если мы в режиме редактирования, загрузим инфо о витамине
	useEffect(() => {
		if (isEdit) {
			const vitamin = vitamins.find(v => v.id === vitaminId)
			setName(vitamin?.name || '')
			setDosage(vitamin?.dosage.replace(/[^0-9]/g, '') || '') // Удаляем mg при редактировании
		}
	}, [vitaminId, vitamins])

	// const saveVitamin = () => {
	// 	const vitaminData = {
	// 		id: isEdit ? vitaminId : Date.now().toString(),
	// 		name,
	// 		dosage: `${dosage} mg`, // Добавляем "mg" к значение дозировки
	// 	}

	// 	if (isEdit) {
	// 		updateVitamin(vitaminId, vitaminData)
	// 	} else {
	// 		addVitamin(vitaminData)
	// 	}

	// 	navigation.goBack()
	// }
	const handleSave = () => {
		// Предполагается, что dosage имеет числовое значение
		const vitaminData = { name, dosage: `${dosage} mg` }
		if (isEdit) {
			updateVitamin(vitaminId, vitaminData)
		} else {
			addVitamin(vitaminData)
		}
		navigation.goBack()
	}

	const handleDosageInput = text => {
		if (/^\d*$/.test(text)) {
			// Разрешаем только числа
			setDosage(text)
		}
	}

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.title}>Редактирование витамина</Text>
			<Text style={styles.label}>Название:</Text>
			<TextInput
				value={name}
				onChangeText={setName}
				style={globalStyles.input}
			/>
			<Text style={styles.label}>Дозировка (в мг):</Text>
			<TextInput
				value={dosage}
				onChangeText={handleDosageInput}
				style={globalStyles.input}
				keyboardType='numeric'
			/>
			<CustomButton
				title={isEdit ? 'Обновить' : 'Добавить'}
				// onPress={saveVitamin}
				onPress={handleSave}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	label: {
		fontSize: 16,
		marginBottom: 5,
	},
	// Если нужны другие стили, добавьте их здесь
})

export default AddEditVitaminScreen
