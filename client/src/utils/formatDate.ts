const getDayWord = (days: number): string => {
	if (days === 1) return 'день'
	if (days >= 2 && days <= 4) return 'дня'
	return 'дней'
}

export const formatDate = (date: Date): string => {
	const now = new Date()
	const daysDiff = Math.floor(
		(now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
	)

	if (daysDiff < 7) {
		if (daysDiff === 0) return 'сегодня'
		return `${daysDiff} ${getDayWord(daysDiff)} назад`
	}

	return date.toLocaleDateString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
}
