export const validateVitamin = vitamin => {
	// Implement your validation logic here
	if (!vitamin.name || !vitamin.quantity || !vitamin.unit) {
		return false
	}
	return true
}
