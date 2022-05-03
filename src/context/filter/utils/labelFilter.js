export const labelFilter = (filterState, data) => {
  switch (filterState.label) {
    case 'home':
      return data?.filter((item) => item.label === 'home')
    case 'work':
      return data?.filter((item) => item.label === 'work')
    default:
      return data
  }
}
