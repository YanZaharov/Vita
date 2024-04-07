import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

function createVitaminStore() {
	return create(set => ({
		vitamins: [],
		loadVitamins: async () => {
			const vitaminsJSON = await AsyncStorage.getItem('vitamins')
			set({ vitamins: vitaminsJSON ? JSON.parse(vitaminsJSON) : [] })
		},
		addVitamin: async vitamin => {
			set(state => {
				const newVitamins = [...state.vitamins, vitamin]
				AsyncStorage.setItem('vitamins', JSON.stringify(newVitamins))
				return { vitamins: newVitamins }
			})
		},
		removeVitamin: async vitaminId => {
			set(state => {
				const filteredVitamins = state.vitamins.filter(v => v.id !== vitaminId)
				AsyncStorage.setItem('vitamins', JSON.stringify(filteredVitamins))
				return { vitamins: filteredVitamins }
			})
		},
		updateVitamin: async updatedVitamin => {
			set(state => {
				const vitamins = state.vitamins.map(vitamin =>
					vitamin.id === updatedVitamin.id ? updatedVitamin : vitamin
				)
				AsyncStorage.setItem('vitamins', JSON.stringify(vitamins))
				return { vitamins }
			})
		},
	}))
}

export const useVitaminStore = createVitaminStore()
