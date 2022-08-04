import { configureStore } from '@reduxjs/toolkit'
import ClothesSlice from './slices/clothes'
import userSlice from './slices/userServices'


export const store = configureStore({
    reducer: {
        clothes: ClothesSlice,
        userServices: userSlice
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch