import s from './LoadMoreWidget.module.less'

const LoadMoreWidget = ({ onLoadMore }: any) => {
	return (
		<div className={s.root} onClick={onLoadMore}>
			Загрузить еще
		</div>
	)
}

export default LoadMoreWidget
