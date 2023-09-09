import BookingVaccine from "@/components/BookingVaccine";

export default function Booking() {
    return (
        <main className="bg-white w-[100%] flex flex-col items-center space-y-6">
            <div className="text-xl font-medium text-black mt-5">
                Booking Page
            </div>
            <BookingVaccine />
            <button className="block rounded-md bg-sky-500 hover:bg-sky-900 px-3 py-2 shadow-sm text-white">
                Check Vaccine Availability
            </button>
        </main>
    );
}