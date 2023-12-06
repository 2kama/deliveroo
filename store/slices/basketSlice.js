import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      )

      let basket = [...state.items]
      
      if(index >= 0) {
        basket[index].quantity += 1
        state.items = [...basket]
      }else {
        state.items = [
            ...state.items, 
            {
                ...action.payload,
                quantity: 1
            }
        ]
      }

    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      )

      let basket = [...state.items]

      if(index >= 0) {
        if(basket[index].quantity == 1) {
          basket.splice(index, 1)
        }else {
            basket[index].quantity -= 1
        }
        state.items = [...basket]
      }else {
        return
      }
    },
    emptyBasket: (state, action) => {
        let basket = []
        state.items = [...basket]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, emptyBasket } = basketSlice.actions

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(item => item.id === id);
export const selectBasketItems = state => state.basket.items
export const selectBasketTotal = state => state.basket.items.reduce((total, item) => total += item.price * item.quantity, 0)
export const selectBasketTotalItem = state => state.basket.items.reduce((total, item) => total += item.quantity, 0)

export default basketSlice.reducer