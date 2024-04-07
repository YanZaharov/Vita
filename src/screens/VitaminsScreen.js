import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useVitaminStore } from '../store/vitaminStore'

const VitaminsScreen = ({ navigation }) => {
	const vitamins = useVitaminStore(state => state.vitamins)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Список витаминов</Text>
			{vitamins.map(vitamin => (
				<View key={vitamin.id} style={styles.vitaminContainer}>
					<Text>
						{vitamin.name} ({vitamin.unit})
					</Text>
					<Text>Количество: {vitamin.quantity}</Text>
					{/* Место для кнопок действий: редактирования, удаления */}
				</View>
			))}
			<Button
				title='Добавить витамин'
				onPress={() => navigation.navigate('AddVitamin')}
			/>
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
	vitaminContainer: {
		padding: 10,
		marginVertical: 5,
		backgroundColor: '#f0f0f0',
		borderRadius: 5,
	},
})

export default VitaminsScreen
