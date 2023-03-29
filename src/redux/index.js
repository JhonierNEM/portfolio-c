import {configureStore} from "@reduxjs/toolkit"
import {counterRs} from './reducers'

const store = configureStore({
    reducer:{
        counter:counterRs
    }
})

export default store;