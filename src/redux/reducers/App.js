import { createSlice } from '@reduxjs/toolkit'
import { information } from '../../data/english'

const app = createSlice({
  name: 'app',
  initialState: {
    viewNav: true,
    language: 'EN',
    information: { ...information },
  },
  reducers: {
    setViewNav: (state, action) => {
      state.viewNav = action.payload
    },
    setInformation: (state, action) => {
      state.information = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const appRs = app.reducer
export const { setViewNav, setInformation, setLanguage } = app.actions
