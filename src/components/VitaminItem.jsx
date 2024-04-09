import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

const VitaminItem = ({ vitamin, onEdit, onDelete }) => {
	// Получение дозировки витамина и преобразование в строку с суффиксом 'mg', если это необходимо
	// Приведенный ниже код предполагает, что дозировка уже включает единицу измерения 'mg'.
	const dosageText = vitamin.dosage.includes('mg')
		? vitamin.dosage
		: `${vitamin.dosage} mg`

	return (
		<View style={globalStyles.listItem}>
			<View style={styles.infoContainer}>
				<Text style={globalStyles.listItemText}>{vitamin.name}</Text>
				{/* Используйте dosageText для отображения дозировки */}
				<Text style={globalStyles.listItemText}>{dosageText}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => onEdit(vitamin)}
					style={globalStyles.button}
				>
					<Text style={globalStyles.buttonText}>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => onDelete(vitamin.id)}
					style={[globalStyles.button, globalStyles.deleteButton]}
				>
					<Text style={globalStyles.buttonText}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	infoContainer: {
		flex: 1,
		marginRight: 8,
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	// ...другие стили, если они есть
})

export default VitaminItem
