import axios from 'axios'

const API_URL = 'https://mirror-app-frontend-demo-server.vercel.app'

export const getPosts = async (): Promise<any> => {
	try {
		const [usersResponse, postsResponse] = await Promise.all([
			axios.get(`${API_URL}/users`),
			axios.get(`${API_URL}/posts`),
		])

		const usersMap = usersResponse.data.reduce((acc: any, user: any) => {
			acc[user.postId] = user.username
			return acc
		}, {})

		return postsResponse.data.map((post: any) => ({
			...post,
			username: usersMap[post.id],
		}))
	} catch (error) {
		console.error('Error fetching posts:', error)
		throw error
	}
}
