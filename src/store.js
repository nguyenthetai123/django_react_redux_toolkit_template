
import userreducer from './Slice/UserSlice';
import productreducer from './Slice/productSlice';
import orderreducer from './Slice/orderSlice';
import { configureStore } from '@reduxjs/toolkit'




const store =configureStore({
    reducer:{
        user:userreducer,
        products:productreducer,
        oders:orderreducer
    }
});
export default store