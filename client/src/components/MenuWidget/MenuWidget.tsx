import { GRID } from '../../constants/constants'
import { store } from '../../Store/store'
import { getPosts, getSettings } from '../../utils'
import s from './MenuWidget.module.less'

const MenuWidget = () => {
	if (!store.settings) {
		return null
	}

	const { layout, template, navigation } = store.settings
	const currentLayout =
		layout.current === GRID ? layout.params.grid : layout.params.masonry

	const reload = async () => {
		const newPosts = await getPosts()
		const newSettings = await getSettings()

		store.setPosts(newPosts)
		store.setSettings(newSettings)
	}

	return (
		<div className={s.root}>
			<button className={s.btn} onClick={reload}>
				Обновить
			</button>
			<div className={s.list}>
				<div className={s.template}>{layout.current}</div>
				<div className={s.card}>{template}</div>
				<div className={s.navigation}>{navigation}</div>
				<div className={s.columns}> колонки {currentLayout.columns}</div>
				<div className={s.rows}>ряды {currentLayout.rows}</div>
			</div>
		</div>
	)
}

export default MenuWidget
