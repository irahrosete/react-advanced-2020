export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newPeople = [...state.people, action.data]
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added',
      }
    }
    case 'NO_VALUE': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter a value',
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
      }
    }
    case 'REMOVE_ITEM': {
      const newPeople = state.people.filter(
        (person) => person.id !== action.data
      )
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item removed',
      }
    }
    case 'CLEAR_ALL': {
      return {
        ...state,
        people: [],
        isModalOpen: true,
        modalContent: 'all items cleared',
      }
    }
    default:
      return state
  }
}
