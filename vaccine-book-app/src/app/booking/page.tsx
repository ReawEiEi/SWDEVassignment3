import BookingVaccine from "@/components/BookingVaccine";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    

    return (
        <main className="bg-white w-[100%] flex flex-col items-center space-y-6">
            <div className="bg-slate-100 rounded-lg space-x-5 space-y-6 w-4/5 px-10 py-5 justify-center mt-5">
                <div className="text-2xl text-black">
                    Information
                </div>
                <table className="text-black table-auto border-separate border-spacing-2">
                    <tbody>
                        <tr><td>Name</td><td>:</td><td>{profile.data.name}</td></tr>
                        <tr><td>Email</td><td>:</td><td>{profile.data.email}</td></tr>
                        <tr><td>Tel.</td><td>:</td><td>{profile.data.tel}</td></tr>
                        <tr><td>Member Since</td><td>:</td><td>{createdAt.toString()}</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="text-xl font-medium text-black mt-5">
                Booking Page
            </div>
            <BookingVaccine />

        </main>
    );
}