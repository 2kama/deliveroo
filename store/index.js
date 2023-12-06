import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import categorySlice from './slices/categorySlice'
import restaurantSlice  from './slices/restaurantSlice'

export default configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantSlice,
    category: categorySlice
  }
})