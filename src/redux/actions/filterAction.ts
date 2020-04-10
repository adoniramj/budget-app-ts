import { FilterActionTypes} from '../../types/types'

const setTextFilter = (text:string): FilterActionTypes => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByAmount = (): FilterActionTypes => ({ //REMOVE
  type: 'SORT_BY_AMOUNT'
})

const sortByDate = (text: string) => ({ //REMOVE
  type: 'SORT_BY_DATE',
  sortBy: text
})

const sortBy = (text: string) => ({
  type: 'SORT_BY',
  sortBy: text
})

export { setTextFilter, sortByAmount, sortByDate, sortBy }