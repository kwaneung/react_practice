import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter2',
    initialState: {
        value: 0
    },
    reducers: {
        increment2: state2 => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state2.value += 1
        },
        decrement2: state2 => {
            state2.value -= 1
        },
        incrementByAmount2: (state2, action) => {
            state2.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment2, decrement2, incrementByAmount2 } = counterSlice.actions

export default counterSlice.reducer