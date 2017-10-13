//these 2 lines will be reused every time in redux in every project:
//they are the minimum imports required to create a redux store:
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

//now project specific code:
//here are the reducers that you import, that you combine lower
//along with todoReducer, you usually have 6 or 7  { todoReducer, ..... }
import { todoReducer } from '../reducers'

let store = null
export default {

  createStore: () => {
    //here we are combining the reducers:
    const reducers = combineReducers({
      todo: todoReducer
    })

    //create the store using all reducers (above)
    //and a function from the redux library called "createStore"
    const store = createStore(
      reducers,
      applyMiddleware(thunk)  //this won't come up in this project, but in other projects
    )

      return store
  },

  currentStore: () => {
    return store
  }

}
