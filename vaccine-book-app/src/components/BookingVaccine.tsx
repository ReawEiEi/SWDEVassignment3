'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { chooseReservation } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interface"

export default function BookingVaccine() {

    const dispatch = useDispatch<AppDispatch>()

    const [name, setName] = useState("")
    const [id, setID] = useState("")
    const [hospital, setHospital] = useState("Chulalongkorn Hospital")
    const [reserverDate, setReserveDate] = useState<Dayjs|null>(null)

    const makeReservation = () => {
        if(name && id && hospital && reserverDate) {
            const [rname, sname] = name.split(" ")
            const item:BookingItem = {
                name: rname,
                surname: sname,
                id: id,
                hospital: hospital,
                date: dayjs(reserverDate).format("YYYY/MM/DD")
            }
            dispatch(chooseReservation(item))
        }
    }
    
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-6 w-4/5 px-10 py-5 justify-center">
            <div className="space-y-4">
                <TextField
                    className="w-[100%]"
                    required
                    id="standard-required"
                    label="Name-Surname"
                    variant="standard"
                    value={name}
                    onChange={(value)=>{setName(value.target.value)}}
                />
                <TextField
                    className="w-[100%]"
                    required
                    id="standard-number"
                    label="ID Card/ Passport ID"
                    variant="standard"
                    value={id}
                    onChange={(value)=>{setID(value.target.value)}}
                />
                <div className="space-y-0">
                    <p className="text-gray-600">Choose Hospital</p>
                    <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[100%]" value={hospital} 
                    onChange={(val)=>{setHospital(val.target.value)}}>
                        <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                        <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
                    </Select>
                </div>
                <div>
                    <p className="text-gray-600">Choose Date</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-white" value={reserverDate} onChange={(val)=> {setReserveDate(val)}}/>
                    </LocalizationProvider>
                </div>
            </div>
            <button className="block rounded-md bg-sky-500 hover:bg-sky-900 px-3 py-2 shadow-sm text-white"
            onClick={makeReservation}>
                Booking Vaccine
            </button>
        </div>
    );
}