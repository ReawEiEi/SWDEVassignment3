import Link from "next/link";
import InformatinCard from "./InformationCard";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const hospitalReady = await hospitalJson;
  return (
    <>
      <div className="m-2.5 mt-6 flex flex-row flex-wrap justify-around content-around">
        {hospitalReady.data.map((hospitalItem: Object) => (
          <Link
            href={`/hospital/${hospitalItem.id}`}
            className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[20%]"
          >
            <InformatinCard
              hospitalName={hospitalItem.name}
              imgHospital={hospitalItem.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
