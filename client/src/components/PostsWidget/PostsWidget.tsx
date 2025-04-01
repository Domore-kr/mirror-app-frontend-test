import { useState } from 'react'
import s from './PostsWidget.module.less'
import { GRID } from '../../constants/constants'
import { PaginationWidget } from '../PaginationWidget'

const PostsWidget = ({ settings, posts }: any) => {
	if (!settings || !posts) {
		return null
	}
	const { layout } = settings
	const currentLayout =
		layout.current === GRID ? layout.params.grid : layout.params.masonry

	const postsPerPage = currentLayout.rows * currentLayout.columns
	const [currentPage, setCurrentPage] = useState(1)

	const paginatedPosts = posts.slice(
		(currentPage - 1) * postsPerPage,
		currentPage * postsPerPage
	)

	const totalPages = Math.ceil(posts.length / postsPerPage)

	return (
		<div className={`${s.root} ${layout.current === 'grid' && s.grid}`}>
			<div
				className={`${s.posts} ${layout.current === 'grid' && s.grid}`}
				style={{
					gridTemplateColumns: `repeat(${currentLayout.columns}, 1fr)`,
				}}
			>
				{paginatedPosts.map((post: any) => {
					const { caption, date, likes, comments } = post
					return (
						<div className={s.post} key={post.id}>
							<div className={`${s.postBlock} ${s.header}`}>{caption}</div>
							<div className={`${s.postBlock} ${s.date}`}>{date}</div>
							<div className={`${s.postBlock} ${s.inf}`}>
								{likes} лайков {comments} комментариев
							</div>
						</div>
					)
				})}
			</div>
			<PaginationWidget
				totalPages={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}

export default PostsWidget
