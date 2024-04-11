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
			'Удалить витамин',
			'Вы уверены, что хотите удалить этот витамин из списка?',
			[
				{ text: 'Отмена', style: 'cancel' },
				{
					text: 'Удалить',
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
			<Text style={styles.title}>Список Витаминов</Text>
			<FlatList
				data={vitamins}
				keyExtractor={(item, index) => `vitamin-${item.id.toString()}-${index}`} // Гарантируем, что ключ - это строка
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
				title='Добавить новый витамин'
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
		marginBottom: 32,
		textAlign: 'center',
	},
	listContent: {
		paddingBottom: 16,
	},
	// ...остальные стили...
})

export default VitaminsScreen
