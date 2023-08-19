

import { configureStore } from '@reduxjs/toolkit'
import userreducer from './Slice/userSlice'



const store =configureStore({
    reducer:{
        user: userreducer
    }
});
export default store