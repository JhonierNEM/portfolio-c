import {configureStore} from "@reduxjs/toolkit"
import {counterRs,appRs} from './reducers'

const store = configureStore({
    reducer:{
        app: appRs,
        counter:counterRs,
    }
})

export default store;