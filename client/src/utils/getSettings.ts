export const getSettings = async () => {
	const response = await fetch(
		'https://mirror-app-frontend-demo-server.vercel.app/settings'
	).then(response => response.json())

	return response
}
