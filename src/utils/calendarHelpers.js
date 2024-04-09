export const getMarkedDates = vitamins => {
	// Примерная логика для создания помеченных дат в календаре на основе витаминов
	const marked = {}
	vitamins.forEach(vitamin => {
		// Замените 'START_DATE' и 'END_DATE' на соответствующие свойства объекта витамина
		const startDate = new Date(vitamin.START_DATE)
		const endDate = new Date(vitamin.END_DATE)
		for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
			const dateStr = d.toISOString().split('T')[0]
			marked[dateStr] = { marked: true }
		}
	})
	return marked
}
export const filterVitaminsForSelectedDay = (vitamins, selectedDate) => {
	if (!selectedDate) return []

	return vitamins.filter(vitamin => {
		const startDate = new Date(vitamin.startDate).setHours(0, 0, 0, 0)
		const endDate = new Date(vitamin.endDate).setHours(0, 0, 0, 0)
		const date = new Date(selectedDate).setHours(0, 0, 0, 0)
		return date >= startDate && date <= endDate
	})
}
