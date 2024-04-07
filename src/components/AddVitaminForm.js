import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'
import CustomPicker from './CustomPicker'

const AddVitaminForm = ({ onSave }) => {
	const [name, setName] = useState('')
	const [quantity, setQuantity] = useState('')
	const [unit, setUnit] = useState('mg') // 'mg' или 'pieces'

	return (
		<View style={styles.container}>
			<CustomInput
				value={name}
				onChangeText={setName}
				placeholder='Название витамина'
			/>
			<CustomInput
				value={quantity}
				onChangeText={setQuantity}
				placeholder='Количество'
				keyboardType='numeric'
			/>
			<CustomPicker
				selectedValue={unit}
				onValueChange={setUnit}
				items={[
					{ label: 'Миллиграммы (mg)', value: 'mg' },
					{ label: 'Штуки (pcs)', value: 'pieces' },
				]}
			/>
			<CustomButton
				title='Добавить витамин'
				onPress={() => onSave({ name, quantity, unit })}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
})

export default AddVitaminForm
