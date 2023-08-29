import Image from "next/image";
import TopMenuItem from "./TopMuneItem";

export default function TopMenu() {
    return (
        <div className="h-14 bg-white top-0 left-0 right-0 fixed z-30 border-y-2 border-gray-950 flex flex-row-reverse">
            <Image src={'/img/logo.png'} alt="Logo" className="h-full w-auto mr-1" width={0} height={0} sizes="100vh" />
            <TopMenuItem title={"Booking"} pageRef={"/booking"} />
        </div>
    );
}