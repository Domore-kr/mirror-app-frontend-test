import { useState, useEffect } from 'react'
import s from './PostsWidget.module.less'
import {
	GRID,
	HOVER,
	LOADMORE,
	MASONRY,
	PAGINATION,
} from '../../constants/constants'
import { PaginationWidget } from '../PaginationWidget'
import { store } from '../../Store/store'
import { LoadMoreWidget } from '../LoadMoreWidget'
import { formatDate } from '../../utils'

const PostsWidget = () => {
	if (!store.settings || !store.posts) {
		return null
	}

	const { layout, navigation, template } = store.settings
	const currentLayout =
		layout?.current === GRID ? layout?.params?.grid : layout?.params?.masonry

	if (!currentLayout) {
		return null
	}

	const postsPerPage = currentLayout.rows * currentLayout.columns
	const [currentPage, setCurrentPage] = useState(1)
	const [visiblePosts, setVisiblePosts] = useState(postsPerPage)

	useEffect(() => {
		setVisiblePosts(postsPerPage)
	}, [currentLayout])

	const paginatedPosts =
		navigation === PAGINATION
			? store.posts.slice(
					(currentPage - 1) * postsPerPage,
					currentPage * postsPerPage
			  )
			: store.posts.slice(0, visiblePosts)

	const handleLoadMore = () => {
		setVisiblePosts(prev => prev + postsPerPage)
	}

	const nameDate = (userName: string, date: string, caption: string) => (
		<>
			{template === HOVER ? (
				<>
					<div className={`${s.postBlock} ${s.date}`}>{caption}</div>
					<div className={`${s.postBlock} ${s.date}`}>
						<span>{userName}</span>
						<span>{formatDate(new Date(date))}</span>
					</div>
				</>
			) : (
				<>
					<div className={`${s.postBlock} ${s.date}`}>
						<span>{userName}</span>
						<span>{formatDate(new Date(date))}</span>
					</div>
					<div className={`${s.postBlock} ${s.date}`}>{caption}</div>
				</>
			)}
		</>
	)

	return (
		<div className={s.root}>
			<div
				className={s.posts}
				style={{
					gridTemplateColumns: `repeat(${currentLayout.columns}, 1fr)`,
					gridTemplateRows: `repeat(${currentLayout.rows}, auto)`,
				}}
			>
				{paginatedPosts.map(
					({ id, caption, date, likes, comments, username }) => (
						<div
							className={`${s.post} ${
								store.settings!.layout.current === MASONRY && s.masonry
							} ${store.settings!.layout.current === GRID && s.grid}`}
							key={id}
						>
							{nameDate(username, date, caption)}
							<div className={s.postBlock}>
								{likes} лайков {comments} комментариев
							</div>
						</div>
					)
				)}
			</div>
			{navigation === LOADMORE && (
				<LoadMoreWidget onLoadMore={handleLoadMore} />
			)}
			{navigation === PAGINATION && (
				<PaginationWidget
					postsPerPage={postsPerPage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	)
}

export default PostsWidget
