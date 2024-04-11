import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export const useVitaminStore = create(set => ({
	vitamins: [],

	loadVitamins: async () => {
		try {
			const vitaminsJSON = await AsyncStorage.getItem('vitamins')
			if (vitaminsJSON) {
				const loadedVitamins = JSON.parse(vitaminsJSON).map(vitamin => ({
					...vitamin,
					startDate: new Date(vitamin.startDate), // Преобразует строку в объект Date
					endDate: new Date(vitamin.endDate), // Преобразует строку в объект Date
				}))

				// Валидация загруженных дат
				const validVitamins = loadedVitamins.filter(vitamin => {
					return !isNaN(vitamin.startDate) && !isNaN(vitamin.endDate)
				})

				set({ vitamins: validVitamins })
			}
		} catch (error) {
			console.error('Failed to load vitamins:', error)
		}
	},

	addVitamin: async vitamin => {
		set(state => {
			const newVitamins = [
				...state.vitamins,
				{
					...vitamin,
					startDate: new Date(vitamin.startDate).toISOString(),
					endDate: new Date(vitamin.endDate).toISOString(),
				},
			]
			AsyncStorage.setItem('vitamins', JSON.stringify(newVitamins)).catch(
				error => {
					console.error('Failed to save vitamins:', error)
				}
			)
			return { vitamins: newVitamins }
		})
	},

	updateVitamin: async (vitaminId, updatedData) => {
		set(state => {
			const updatedVitamins = state.vitamins.map(vitamin =>
				vitamin.id === vitaminId
					? {
							...vitamin,
							...updatedData,
							startDate: new Date(updatedData.startDate).toISOString(),
							endDate: new Date(updatedData.endDate).toISOString(),
					  }
					: vitamin
			)
			AsyncStorage.setItem('vitamins', JSON.stringify(updatedVitamins)).catch(
				error => {
					console.error('Failed to update vitamins:', error)
				}
			)
			return { vitamins: updatedVitamins }
		})
	},

	removeVitamin: async vitaminId => {
		set(state => {
			const newVitamins = state.vitamins.filter(
				vitamin => vitamin.id !== vitaminId
			)
			AsyncStorage.setItem('vitamins', JSON.stringify(newVitamins)).catch(
				error => {
					console.error('Failed to remove vitamins:', error)
				}
			)
			return { vitamins: newVitamins }
		})
	},
}))
