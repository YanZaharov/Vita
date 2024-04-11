import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const formatDate = dateString => {
	const date = new Date(dateString)
	if (isNaN(date.getTime())) {
		return 'Неверная дата'
	}
	return date.toLocaleDateString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
}

const VitaminItem = ({ vitamin, onDelete, onEdit }) => {
	const { name, dosage, color, startDate, endDate } = vitamin

	return (
		<View style={[styles.container, { borderColor: color || '#000' }]}>
			<View style={styles.infoContainer}>
				<Text style={styles.name}>{name || 'Без названия'}</Text>
				<Text style={styles.dosage}>
					{dosage ? `${dosage} мг` : 'Дозировка не указана'}
				</Text>
				<Text>Начало: {formatDate(startDate)}</Text>
				<Text>Конец: {formatDate(endDate)}</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity onPress={onEdit} style={styles.button}>
					<Text>Изменить</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={onDelete} style={styles.button}>
					<Text>Удалить</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
		marginVertical: 8,
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		borderRadius: 8,
	},
	infoContainer: {
		flex: 1,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	dosage: {
		fontSize: 14,
		color: 'grey',
	},
	buttonsContainer: {
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
	},
	button: {
		marginLeft: 8,
		backgroundColor: '#ddd',
		padding: 10,
		borderRadius: 5,
	},
})

export default VitaminItem
