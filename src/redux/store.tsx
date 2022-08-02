import { configureStore } from '@reduxjs/toolkit'
import ClothesSlice from './slices/clothes'


export const store = configureStore({
    reducer: {
        clothes: ClothesSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch