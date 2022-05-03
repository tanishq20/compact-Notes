export const priorityFilter = (filterState, data) => {
  switch (filterState.priority) {
    case 'high':
      return data?.filter((item) => item.priority === 'high')
    case 'medium':
      return data?.filter((item) => item.priority === 'medium')
    case 'low':
      return data?.filter((item) => item.priority === 'low')
    default:
      return data
  }
}
