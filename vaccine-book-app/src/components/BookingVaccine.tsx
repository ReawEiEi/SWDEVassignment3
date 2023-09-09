'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"

export default function BookingVaccine() {
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-6 w-4/5 px-10 py-5 justify-center">
            <div className="space-y-4">
                <TextField
                    className="w-[100%]"
                    required
                    id="standard-required"
                    label="Name-Surname"
                    variant="standard"
                />
                <TextField
                    className="w-[100%]"
                    required
                    id="standard-number"
                    label="ID Card/ Passport ID"
                    variant="standard"
                />
                <div className="space-y-0">
                    <p className="text-gray-600">Choose Hospital</p>
                    <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[100%]">
                        <MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="RJ">Rajavithi Hospital</MenuItem>
                        <MenuItem value="TM">Thammasat University Hospital</MenuItem>
                    </Select>
                </div>
                <div>
                    <p className="text-gray-600">Choose Date</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-white" />
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
}