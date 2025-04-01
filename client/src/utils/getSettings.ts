export const getSettings = async () => {
	const response = await fetch('http://localhost:4000/settings').then(
		response => response.json()
	)

	return response
}
