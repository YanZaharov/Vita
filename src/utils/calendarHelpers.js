export const getMarkedDates = vitamins => {
	const marked = {}
	vitamins.forEach(vitamin => {
		const startDate = new Date(vitamin.startDate) // Предполагая, что объект витамина имеет свойство startDate
		const endDate = new Date(vitamin.endDate) // Предполагая, что объект витамина имеет свойство endDate
		for (
			let d = new Date(startDate);
			d <= endDate;
			d.setDate(d.getDate() + 1)
		) {
			const dateStr = d.toISOString().split('T')[0]
			if (marked[dateStr]) {
				marked[dateStr].dots.push({ color: vitamin.color || 'blue' })
			} else {
				marked[dateStr] = { dots: [{ color: vitamin.color || 'blue' }] }
			}
		}
	})
	return marked
}

export const filterVitaminsForSelectedDay = (vitamins, date) => {
	const selected = new Date(date)
	selected.setHours(0, 0, 0, 0) // Обнуляем время, чтобы сравнение было по дате, а не времени

	return vitamins.filter(vitamin => {
		const start = new Date(vitamin.startDate)
		start.setHours(0, 0, 0, 0)

		const end = new Date(vitamin.endDate)
		end.setHours(0, 0, 0, 0)

		return selected >= start && selected <= end
	})
}
