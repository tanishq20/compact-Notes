export const sortByDateFilter = (state, data) => {
  switch (state.sortByDate) {
    case 'newest':
      return [...data].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      )
    case 'oldest':
      return [...data].sort(
        (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
      )
    default:
      return data
  }
}
