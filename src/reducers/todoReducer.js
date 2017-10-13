import constants from '../constants'

var initialState = {
  todos: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    case (constants.CREATE_TODO_ITEM):
      console.log('CREATE_TODO_ITEM: ');

      return state

    default:
      return state
  }

}
