import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import { globalStyles } from '../styles/globalStyles'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={[globalStyles.container, styles.screen]}>
			{/* Отцентруем текст по высоте, используя justifyContent: 'center' */}
			<View style={styles.content}>
				<Text style={styles.welcomeText}>Добро пожаловать в</Text>
				<Text style={styles.vitaText}>
					VITA - ваш персональный менеджер витаминов
				</Text>
				<CustomButton
					title='Перейти к витаминам'
					onPress={() => navigation.navigate('Vitamins')}
				/>
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
	// ...другие стили если нужно
})

export default HomeScreen
