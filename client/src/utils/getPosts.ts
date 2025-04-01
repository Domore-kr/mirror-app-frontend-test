export const getPosts = async () => {
	const response = await fetch('http://localhost:4000/posts')

	return response.json()
}
