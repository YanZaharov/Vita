export const validateVitaminInput = vitamin => {
	let errors = {}
	if (!vitamin.name) {
		errors.name = 'Необходимо указать название витамина.'
	}
	if (!vitamin.dosage) {
		errors.dosage = 'Необходимо указать дозировку.'
	} else if (isNaN(Number(vitamin.dosage))) {
		errors.dosage = 'Дозировка должна быть числом.'
	}
	// Дополнительные валидации по необходимости
	return errors
}
