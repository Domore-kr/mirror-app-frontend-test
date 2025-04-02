import 'normalize.css'
import { MenuWidget, PostsWidget } from './components'
import { useEffect, useLayoutEffect, useState } from 'react'
import { getPosts, getSettings } from './utils'
import s from './app.module.less'
import { observer } from 'mobx-react'
import { store } from './Store/store'

export const App = observer(() => {
	useEffect(() => {
		const fetchData = async () => {
			const postsFetch = await getPosts()
			const settingsFetch = await getSettings()
			store.setPosts(postsFetch)
			store.setSettings(settingsFetch)
		}
		fetchData()
	}, [])

	return (
		<div className={s.root}>
			{store.posts && store.settings && (
				<>
					<MenuWidget />
					<PostsWidget />
				</>
			)}
		</div>
	)
})
