import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const VitaminItem = ({ vitamin, onDelete, onEdit }) => {
	// Здесь предполагается что объект vitamin содержит все необходимые свойства
	const { name, dosage, color, startDate, endDate } = vitamin

	return (
		<View style={[styles.container, { borderColor: color || '#000' }]}>
			<View style={styles.infoContainer}>
				<Text style={styles.name}>{name || 'Unnamed Vitamin'}</Text>
				<Text style={styles.dosage}>
					{dosage ? `${dosage} mg` : 'Dosage not set'}
				</Text>
				<Text>From: {startDate}</Text>
				<Text>To: {endDate}</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity onPress={onEdit} style={styles.button}>
					<Text>Edit</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={onDelete} style={styles.button}>
					<Text>Delete</Text>
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
		borderColor: '#ddd', // You might use color prop here if it is defined
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
