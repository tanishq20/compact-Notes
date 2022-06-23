export const compose =
  (filterState, ...functions) =>
  (notes) => {
    return functions.reduce((acc, cur) => cur(filterState, acc), notes)
  }
