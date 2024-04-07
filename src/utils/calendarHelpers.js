export function getMarkedDates(vitamins) {
	let markedDates = {}
	vitamins.forEach(vitamin => {
		const formattedStartDate = vitamin.startDate.split('T')[0]
		const formattedEndDate = vitamin.endDate.split('T')[0]
		markedDates[formattedStartDate] = {
			startingDay: true,
			color: 'green',
			textColor: 'white',
		}
		markedDates[formattedEndDate] = {
			endingDay: true,
			color: 'red',
			textColor: 'white',
		}
	})
	return markedDates
}
