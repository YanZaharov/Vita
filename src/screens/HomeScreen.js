import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Vitamin Tracker</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Vitamins')}
			>
				<Text style={styles.buttonText}>Просмотреть витамины</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('AddVitamin')}
			>
				<Text style={styles.buttonText}>Добавить витамин</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Calendar')}
			>
				<Text style={styles.buttonText}>Календарь витаминов</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		...globalStyles.container,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f9f9fb', // Фон всей страницы
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		color: '#3f72af', // Цвет заголовка
		marginBottom: 40,
	},
	button: {
		backgroundColor: '#3f72af', // Цвет фона кнопки
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 25, // Скругление краев
		marginVertical: 10,
		width: '80%', // Ширина кнопки
		shadowColor: 'rgba(0, 0, 0, 0.1)', // Тень
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 6,
	},
	buttonText: {
		color: 'white', // Цвет текста кнопки
		fontWeight: '600',
		fontSize: 18,
		textAlign: 'center',
	},
})

export default HomeScreen
