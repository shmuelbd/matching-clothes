import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchClothes = createAsyncThunk(
    'clothes/fetchClothes',
    async () => {
        const response: any = await axios.get('https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94')
        return response.data
    }
)


export const ClothesSlice = createSlice({
    name: 'clothes',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        resetError: (state) => {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchClothes.pending, (state: any, action: PayloadAction<any>) => {
            state.loading = true
        });
        builder.addCase(fetchClothes.fulfilled, (state: any, action: PayloadAction<any>) => {
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(fetchClothes.rejected, (state: any, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        });
    },
})

export const { resetError } = ClothesSlice.actions

export default ClothesSlice.reducer





