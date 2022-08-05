import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

type saveCollectionType = {
    items: Number[],
    date: string,
    time: string
}

export const userSlice = createSlice({
    name: 'userServices',
    initialState: {
        choice: "pants",
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
        resetTempSaves: (state: any, action: PayloadAction<any>) => {
            state.tempsaves = action.payload

        },
        setTime: (state: any, action: PayloadAction<any>) => {
            state.time = action.payload
        },
        deleteItem: (state: any, action: PayloadAction<any>) => {
            state.savedSelection.splice(action.payload, 1);

        },
    },
})

export const { setChoice, changeSteps, saveColletion, setTempSaves, resetTempSaves, deleteItem } = userSlice.actions

export default userSlice.reducer





