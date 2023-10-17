import Image from "next/image";
import TopMenuItem from "./TopMuneItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {

    const session = await getServerSession(authOptions)
    return (
        <div className="h-14 bg-white top-0 left-0 right-0 fixed z-30 border-y-2 border-gray-950 flex flex-row-reverse">
            <Image src={'/img/logo.png'} alt="Logo" className="h-full w-auto mr-px rounded-md" width={0} height={0} sizes="100vh" />
            <TopMenuItem title={"Booking"} pageRef={"/booking"} />
            {
                session ?
                    <Link href='api/auth/signout'>
                        <div className="flex items-center absolute left-0 h-full font-serif text-base text-stone-900 mx-8 text-gray-600">
                            Sign Out
                        </div>
                    </Link> :
                    <Link href='api/auth/signin'>
                        <div className="flex items-center absolute left-0 h-full font-serif text-base text-stone-900 mx-8 text-gray-600">
                            Sign In
                        </div>
                    </Link>
            }
        </div>
    );
}