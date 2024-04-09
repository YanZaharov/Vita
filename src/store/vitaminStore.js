import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export const useVitaminStore = create(set => ({
	vitamins: [],

	loadVitamins: async () => {
		try {
			const vitaminsJSON = await AsyncStorage.getItem('vitamins')
			if (vitaminsJSON) {
				set({ vitamins: JSON.parse(vitaminsJSON) })
			}
		} catch (error) {
			// Обработка ошибок чтения из AsyncStorage
			console.log('Failed to load vitamins:', error)
		}
	},

	addVitamin: async vitamin => {
		set(state => {
			const newVitamins = [...state.vitamins, vitamin]
			// Сохраняем в AsyncStorage
			AsyncStorage.setItem('vitamins', JSON.stringify(newVitamins)).catch(
				error => {
					console.log('Failed to save vitamins:', error)
				}
			)
			return { vitamins: newVitamins }
		})
	},

	updateVitamin: async (vitaminId, updateFunction) => {
		set(state => {
			const updatedVitamins = state.vitamins.map(vitamin =>
				vitamin.id === vitaminId ? updateFunction(vitamin) : vitamin
			)
			// Сохраняем в AsyncStorage
			AsyncStorage.setItem('vitamins', JSON.stringify(updatedVitamins)).catch(
				error => {
					console.log('Failed to update vitamins:', error)
				}
			)
			return { vitamins: updatedVitamins }
		})
	},

	removeVitamin: async vitaminId => {
		set(state => {
			const filteredVitamins = state.vitamins.filter(
				vitamin => vitamin.id !== vitaminId
			)
			// Сохраняем в AsyncStorage
			AsyncStorage.setItem('vitamins', JSON.stringify(filteredVitamins)).catch(
				error => {
					console.log('Failed to remove vitamins:', error)
				}
			)
			return { vitamins: filteredVitamins }
		})
	},
}))
