import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../../utils/firebase';

export const getCategories = createAsyncThunk('getCategories', async () => {
  try {
    const items = []
    const response = await db.collection('category').get()
    response.forEach(doc => items.push({
        id: doc.id,
        ...doc.data()
    })) 
    return items
  } catch (error) {
    console.log(error)
  }
})

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    items: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
        state.items = payload
    })
  }
})

// Action creators are generated for each case reducer function
export const {  } = categorySlice.actions

export const allCategories = state => state.category.items

export default categorySlice.reducer