import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'flex-start',
		paddingTop: 40, // Увеличения отступа сверху для содержимого экрана
		backgroundColor: '#EFE4F9', // Фиолетовый фон
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 20, // Увеличенный отступ снизу для заголовка
		marginTop: 20, // Добавлен отступ сверху для заголовка
	},
	button: {
		backgroundColor: '#9E5DDA', // Мягкий фиолетовый цвет
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginVertical: 5, // Расстояние между вертикальными элементами
		marginHorizontal: 4, // Расстояние между кнопками
		borderRadius: 5, // Скругление кнопок
		minWidth: 80, // Уменьшаем ширину кнопки
	},
	deleteButton: {
		backgroundColor: '#D3BCC0',
		// Мягкий красный или розовый цвет для кнопки "Удалить"
	},
	buttonText: {
		color: 'white',
		fontSize: 14, // Уменьшаем размер текста в кнопках
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: 'white',
		padding: 15,
		fontSize: 18,
		borderRadius: 8,
		marginVertical: 10,
	},
	listItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 16,
		marginVertical: 8,
		backgroundColor: 'white',
		borderRadius: 8,
		elevation: 3,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		minHeight: 60, // Высота элемента списка, адаптивная к содержимому
	},
	listItemText: {
		fontSize: 16, // Меньший размер шрифта
		flexShrink: 1, // Позволяет тексту уменьшаться, если не хватает места
		marginRight: 8, // Дополнительный отступ справа от текста
	},
})
