import { store } from '../../Store/store'
import s from './PaginationWidget.module.less'

const PaginationWidget = ({
	currentPage,
	setCurrentPage,
	postsPerPage,
}: any) => {
	if (!store.posts) {
		return null
	}
	const totalPages = Math.ceil(store.posts.length / postsPerPage)

	return (
		<div className={s.pagination}>
			{Array.from({ length: totalPages }, (_, index) => (
				<button
					key={index + 1}
					className={currentPage === index + 1 ? s.activePage : ''}
					onClick={() => setCurrentPage(index + 1)}
				>
					{index + 1}
				</button>
			))}
		</div>
	)
}

export default PaginationWidget
