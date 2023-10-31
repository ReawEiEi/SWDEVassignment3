import { createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";
import { PayloadAction } from "@reduxjs/toolkit";


type BookingState = {
    vaccineItems: BookingItem[]
}

const initialState: BookingState = {
    vaccineItems: []
}

export const bookSlice = createSlice({
    name: "vaccine",
    initialState,
    reducers: {
        chooseReservation: (state, action: PayloadAction<BookingItem>) => {
            if (state.vaccineItems.length != 0) {
                state.vaccineItems.pop();
            }
            state.vaccineItems.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<BookingItem>) => {
            const remainItems = state.vaccineItems.filter(obj => {
                return ((obj.name !== action.payload.name)
                    || (obj.surname != action.payload.surname)
                    || (obj.id != action.payload.id)
                    || (obj.hospital != action.payload.hospital)
                    || (obj.date != action.payload.date))
            })
            state.vaccineItems = remainItems
        }
    }
})

export const { chooseReservation, removeReservation } = bookSlice.actions
export default bookSlice.reducer