import React from 'react'
import { Picker, StyleSheet, Text, View } from 'react-native'

const CustomPicker = ({ data, onValueChange, selectedValue, placeholder }) => {
	return (
		<View style={styles.pickerContainer}>
			<Text style={styles.placeholder}>{placeholder}</Text>
			<Picker
				selectedValue={selectedValue}
				onValueChange={onValueChange}
				style={styles.picker} // Добавлен стиль для Picker
			>
				{/* Опционально: элемент для выбора, показывающий приглашение выбрать значение */}
				{placeholder && <Picker.Item label={placeholder} value={null} />}

				{/* Вывод элементов списка */}
				{data.map(item => (
					<Picker.Item
						key={item.value.toString()}
						label={item.label}
						value={item.value}
					/>
				))}
			</Picker>
		</View>
	)
}

const styles = StyleSheet.create({
	pickerContainer: {
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		marginVertical: 8,
		padding: 8,
		backgroundColor: '#fff',
	},
	picker: {
		width: '100%',
		height: 44, // Конкретная высота для Picker
	},
	placeholder: {
		color: '#999', // Цвет для подсказки/заголовка
		paddingBottom: 4,
	},
})

export default CustomPicker
