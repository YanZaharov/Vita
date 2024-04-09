import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export const useVitaminStore = create(set => ({
	vitamins: [],
	loadVitamins: async () => {
		try {
			const vitaminsJSON = await AsyncStorage.getItem('vitamins')
			set({ vitamins: vitaminsJSON ? JSON.parse(vitaminsJSON) : [] })
		} catch (e) {
			console.error('Failed to fetch vitamins:', e)
		}
	},
	addVitamin: async vitamin => {
		set(state => {
			const newVitamins = [
				...state.vitamins,
				{ ...vitamin, id: Date.now().toString() },
			]
			AsyncStorage.setItem('vitamins', JSON.stringify(newVitamins))
			return { vitamins: newVitamins }
		})
	},
	updateVitamin: async (vitaminId, vitaminData) => {
		set(state => {
			const newVitamins = state.vitamins.map(v =>
				v.id === vitaminId ? { ...v, ...vitaminData } : v
			)
			AsyncStorage.setItem('vitamins', JSON.stringify(newVitamins))
			return { vitamins: newVitamins }
		})
	},
	removeVitamin: async vitaminId => {
		set(state => {
			const newVitamins = state.vitamins.filter(v => v.id !== vitaminId)
			AsyncStorage.setItem('vitamins', JSON.stringify(newVitamins))
			return { vitamins: newVitamins }
		})
	},
}))
