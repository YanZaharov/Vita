export const formatCalendarMarkedDates = vitamins => {
	return vitamins.reduce((acc, vitamin) => {
		acc[vitamin.date] = { marked: true, dotColor: 'blue', activeOpacity: 0.5 }
		return acc
	}, {})
}
