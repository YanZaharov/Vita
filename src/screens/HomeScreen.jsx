import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import { globalStyles } from '../styles/globalStyles'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={[globalStyles.container, styles.screen]}>
			<View style={styles.content}>
				<Text style={styles.welcomeText}>Добро пожаловать в</Text>
				<Text style={styles.vitaText}>
					VITA - ваш персональный менеджер витаминов
				</Text>
				<CustomButton
					title='Перейти к витаминам'
					onPress={() => navigation.navigate('Vitamins')}
				/>
				{/* Добавленный ниже текст предупреждения */}
				<Text style={styles.disclaimer}>
					*Перед приемом витаминов проконсультируйтесь со специалистом
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		justifyContent: 'center', // Центрируем содержимое по вертикали
	},
	content: {
		alignItems: 'center', // Центрируем содержимое по горизонтали
	},
	welcomeText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 10,
		textAlign: 'center',
	},
	vitaText: {
		fontSize: 20,
		color: '#333',
		marginBottom: 30,
		textAlign: 'center',
	},
	disclaimer: {
		marginTop: 20,
		fontSize: 12, // Меньший размер относительно основного текста
		color: '#999', // Цвет, не привлекающий излишнего внимания
		textAlign: 'center',
	},
})

export default HomeScreen
