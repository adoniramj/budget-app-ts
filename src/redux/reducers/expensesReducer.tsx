const defaultState: {
  id: string,
  description: string,
  note: string,
  amount: number,
  createdAt: number
}[] = []

const expensesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id != action.id)
    default:
      return state
  }
}

export default expensesReducer