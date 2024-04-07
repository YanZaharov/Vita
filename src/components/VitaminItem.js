import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from './CustomButton'

const VitaminItem = ({ vitamin, onRemove, onEdit }) => (
	<View style={styles.itemContainer}>
		<Text style={styles.name}>{vitamin.name}</Text>
		<CustomButton title='Удалить' onPress={onRemove} />
		<CustomButton title='Редактировать' onPress={onEdit} />
	</View>
)

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	name: {
		flex: 1,
	},
	// Дополнительные стили для кнопок и других элементов UI
})

export default VitaminItem
