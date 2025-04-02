import { makeObservable, observable } from 'mobx'
import { Settings } from '../models/settings'
import { Posts } from '../models/posts'

export class Store {
	posts: Posts[] | null = null
	settings: Settings | null = null

	constructor() {
		makeObservable(this, {
			posts: observable,
			settings: observable,
		})
	}

	setPosts(posts: any) {
		this.posts = posts
	}

	setSettings(settings: any) {
		this.settings = settings
	}
}

export const store = new Store()
