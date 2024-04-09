export const validateVitaminInput = vitamin => {
	let errors = {}
	if (!vitamin.name) {
		errors.name = 'Name is required.'
	}
	if (!vitamin.dosage) {
		errors.dosage = 'Dosage is required.'
	} else if (isNaN(vitamin.dosage)) {
		errors.dosage = 'Dosage must be a number.'
	}
	return errors
}
