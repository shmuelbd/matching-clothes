import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userServices',
    initialState: {
        choice: "",
        savedSelection: [],
        step: 0

    },
    reducers: {
        setChoice: (state: any, action: PayloadAction<any>) => {
            state.choice = action.payload
        },
        changeSteps: (state: any, action: PayloadAction<any>) => {
            state.step = action.payload
        },


    },
})

export const { setChoice, changeSteps } = userSlice.actions

export default userSlice.reducer





