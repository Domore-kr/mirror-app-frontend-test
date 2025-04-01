import 'normalize.css'
import { MenuWidget, PostsWidget } from './components'
import { useLayoutEffect, useState } from 'react'
import { getPosts, getSettings } from './utils'
import s from './app.module.less'

function App() {
	const [posts, setPosts] = useState()
	const [settings, setSettings] = useState()

	useLayoutEffect(() => {
		const fetchData = async () => {
			const postsFetch = await getPosts()
			const settingsFetch = await getSettings()
			setPosts(postsFetch)
			setSettings(settingsFetch)
		}
		fetchData()
	}, [])

	return (
		<div className={s.root}>
			<MenuWidget settings={settings} />
			<PostsWidget settings={settings} posts={posts} />
		</div>
	)
}

export default App
