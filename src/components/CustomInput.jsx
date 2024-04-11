import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const CustomInput = ({
	value,
	onChangeText,
	placeholder,
	keyboardType,
	secureTextEntry,
	maxLength,
	multiline,
	numberOfLines,
	editable = true, // по умолчанию инпут доступен для редактирования
	// можно добавить еще пропсы в зависимости от ваших потребностей
}) => {
	return (
		<View style={styles.container}>
			{/* Если нужно добавить label к инпуту, раскомментируйте следующие строки
          <Text style={styles.label}>{label}</Text>
      */}
			<TextInput
				style={[styles.input, !editable && styles.disabledInput]}
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
				maxLength={maxLength} // Максимальное количество символов
				multiline={multiline} // Многострочный ввод
				numberOfLines={numberOfLines} // Количество строк для многострочного ввода
				editable={editable} // Если инпут можно редактировать
				// Добавьте другие необходимые пропсы `TextInput`
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// Этот контейнер может быть полезен для добавления дополнительного стиля, например, для label или иконок
	},
	input: {
		padding: 12,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		marginVertical: 10,
		backgroundColor: 'white',
	},
	disabledInput: {
		backgroundColor: '#f7f7f7', // Фон для неактивного состояния инпута
	},
	// label: {
	//   fontSize: 16,
	//   marginBottom: 5,
	//   color: '#333', // по умолчанию цвет текста
	// },
})

export default CustomInput
