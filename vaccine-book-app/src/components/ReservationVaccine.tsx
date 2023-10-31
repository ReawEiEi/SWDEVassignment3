'use client'
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/bookSlice"

export default function ReservationVaccine() {
    const vaccineItems = useAppSelector((state)=> state.bookSlice.vaccineItems)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
        {   
            (vaccineItems.length == 0) ? <div className="text-black flex justify-center text-4xl">No Vaccine Booking</div>
            :vaccineItems.map((item)=> (
                <div className="flex flex-row justify-center">
                <div className="bg-slate-300 rounded px-5 py-2 mx-5 my-2 w-3/4" key={item.id}>
                    <div className="text-2xl text-black font-serif">{item.hospital}</div>
                    <br></br>
                    <div className="text-base text-black font-serif">Name: {item.name}</div>
                    <div className="text-base text-black font-serif">Surname: {item.surname}</div>
                    <div className="text-base text-black font-serif">ID: {item.id}</div>
                    <br></br>
                    <div className="text-xl text-black font-serif">Date: {item.date}</div>
                    <br></br>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                    onClick={()=>dispatch(removeReservation(item))}>
                        Remove Reservation
                    </button>
                </div>
                </div>
            ))
        }
        </>
    )
}