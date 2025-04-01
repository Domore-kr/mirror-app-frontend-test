import s from './PaginationWidget.module.less'

const PaginationWidget = ({ totalPages, currentPage, setCurrentPage }: any) => {
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
