// ** Reducers Imports
import { combineReducers } from 'redux'
import allReducer from './allReducer'
import auth from './authentication'
import layout from './layout'
import navbar from './navbar'

// const rootReducer = {
//   auth,
//   navbar,
//   layout,
//   allReducer
// }

// export default rootReducer


const rootReducer = combineReducers({
    auth,
    navbar,
    layout,
    allReducer
  })

export default rootReducer

// import { combineReducers } from 'redux'
// import allReducer from './allReducer'

// const rootReducer = combineReducers(allReducer)

// export default rootReducer
