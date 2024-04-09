import React, { useEffect } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import VitaminItem from '../components/VitaminItem'
import { useVitaminStore } from '../store/vitaminStore'
import { globalStyles } from '../styles/globalStyles'

const VitaminsScreen = ({ navigation }) => {
	const vitamins = useVitaminStore(state => state.vitamins)
	const loadVitamins = useVitaminStore(state => state.loadVitamins)
	const removeVitamin = useVitaminStore(state => state.removeVitamin)

	useEffect(() => {
		loadVitamins()
	}, [])

	const handleEditVitamin = vitamin => {
		navigation.navigate('AddEditVitamin', { vitaminId: vitamin.id })
	}

	const handleDeleteVitamin = vitaminId => {
		Alert.alert(
			'Delete Vitamin',
			'Are you sure you want to remove this vitamin from your list?',
			[
				{ text: 'Cancel', style: 'cancel' },
				{
					text: 'Delete',
					onPress: async () => {
						await removeVitamin(vitaminId)
						loadVitamins()
					},
					style: 'destructive',
				},
			]
		)
	}

	return (
		<View style={globalStyles.container}>
			<Text style={styles.title}>Список витаминов</Text>
			<FlatList
				data={vitamins}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<VitaminItem
						vitamin={item}
						onEdit={() => handleEditVitamin(item)}
						onDelete={() => handleDeleteVitamin(item.id)}
					/>
				)}
				contentContainerStyle={styles.listContent}
			/>
			<CustomButton
				title='Add New Vitamin'
				onPress={() =>
					navigation.navigate('AddEditVitamin', { vitaminId: null })
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginTop: 16,
		marginBottom: 32, // Увеличиваем нижний отступ перед списком витаминов
		textAlign: 'center', // Центрируем заголовок
	},
	listContent: {
		paddingBottom: 16, // Добавляем нижний "padding" для списка
	},
	// Внести дополнительные стилизации, если они необходимы
})

export default VitaminsScreen
