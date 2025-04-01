import { GRID } from '../../constants/constants'
import s from './MenuWidget.module.less'

const MenuWidget = ({ settings }: any) => {
	if (!settings) {
		return null
	}
	const { layout, template, navigation } = settings
	const currentLayout =
		layout.current === GRID ? layout.params.grid : layout.params.masonry

	return (
		<div className={s.root}>
			<button className={s.btn}>Обновить</button>
			<div className={s.list}>
				<div className={s.template}>{layout.current}</div>
				<div className={s.card}>{template}</div>
				<div className={s.navigation}>{navigation}</div>
				<div className={s.columns}>{currentLayout.columns}</div>
				<div className={s.rows}>{currentLayout.rows}</div>
			</div>
		</div>
	)
}

export default MenuWidget
