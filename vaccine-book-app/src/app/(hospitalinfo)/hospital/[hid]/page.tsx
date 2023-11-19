import getHospitals from "@/libs/getHospital";
import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid);

  /*
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", { name: "Chulalongkorn Hospital", image: "/img/chula.jpg" })
    mockHospitalRepo.set("002", { name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" })
    mockHospitalRepo.set("003", { name: "Thammasat University Hospital", image: "/img/thammasat.jpg" })
    */

  return (
    <main className="p-10 flex flex-col">
      <div className="flex flex-row mx-auto">
        <Image
          src={hospitalDetail.data.picture}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-80 bg-black"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-lg font-medium text-black mx-5">
            {hospitalDetail.data.name}
          </h1>
          <div>
            <div className="text-lg mx-5 text-black">
              Address: {hospitalDetail.data.address}{" "}
              {hospitalDetail.data.district} {hospitalDetail.data.province}{" "}
              {hospitalDetail.data.postalcode}
            </div>
            <div className="text-lg mx-5 text-black">
              Telephone: {hospitalDetail.data.tel}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
