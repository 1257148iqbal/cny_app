// export default {
//   ...userModuleReducers
// }
import { createSlice } from '@reduxjs/toolkit'
import { userModuleReducers } from './userModuleReducer'


export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    userModuleReducer: userModuleReducers
  }
})

export default layoutSlice.reducer

