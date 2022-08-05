import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type saveCollectionType = {
    items: Number[],
    date: string,
    time: string
}

export const userSlice = createSlice({
    name: 'userServices',
    initialState: {
        choice: "",
        savedSelection: [],
        step: 0,
        time: "",
        tempsaves: []
    },
    reducers: {
        setChoice: (state: any, action: PayloadAction<any>) => {
            state.choice = action.payload
        },
        changeSteps: (state: any, action: PayloadAction<any>) => {
            state.step = action.payload
        },
        saveColletion: (state: any, action: PayloadAction<any>) => {
            state.savedSelection.push(action.payload)
        },
        setTempSaves: (state: any, action: PayloadAction<any>) => {
            state.tempsaves.push(action.payload)
        },
        setTime: (state: any, action: PayloadAction<any>) => {
            state.time = action.payload
        },
    },
})

export const { setChoice, changeSteps, saveColletion, setTempSaves } = userSlice.actions

export default userSlice.reducer





