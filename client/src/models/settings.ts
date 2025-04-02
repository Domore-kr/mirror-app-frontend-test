export interface Settings {
	layout: Layout
	navigation: string
	template: string
}

export interface Layout {
	current: string
	params: CurrentLayout
}

export interface CurrentLayout {
	grid: Params
	masonry: Params
}

export interface Params {
	columns: number
	rows: number
}
