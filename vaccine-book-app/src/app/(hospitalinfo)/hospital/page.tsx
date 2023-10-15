import CardPanel from "@/components/CardPanel"
import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default function Hostital() {
    const hospitals = getHospitals()
    return (
        <main className="text-center p-5">
            <h1 className="text-2xl text-black text-semibold">Lists of Hospitals</h1>
            <Suspense fallback={<p className="text-black">Loading . . .<LinearProgress /></p>}>
                <HospitalCatalog hospitalJson={hospitals} />
            </Suspense>
        </main>
    )
}