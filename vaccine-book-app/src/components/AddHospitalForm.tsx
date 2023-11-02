import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("addr");
    const district = addHospitalForm.get("dist");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("pic");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (err) {
      console.log(err);
    }
    revalidateTag("hospitals");
    redirect("/hospital");
  };

  return (
    <form action={addHospital}>
      <div className="text-xl text-gray-800 font-semibold bg-slate-100 p-2 rounded-lg w-[20%] mx-auto">
        Enter Hospital Information
      </div>
      <div className="bg-slate-100 p-4 rounded-lg w-[50%] my-3 mx-auto">
        <div className="flex items-center w-full my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
            Hospital:
          </label>
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Hospital Name"
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          ></input>
        </div>
        <div className="flex items-center w-full my-2">
          <label htmlFor="addr" className="w-auto block text-gray-700 pr-4">
            Address:
          </label>
          <input
            type="text"
            required
            id="addr"
            name="addr"
            placeholder="Address"
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          ></input>
        </div>
        <div className="flex items-center w-full my-2">
          <label htmlFor="dist" className="w-auto block text-gray-700 pr-4">
            District:
          </label>
          <input
            type="text"
            required
            id="dist"
            name="dist"
            placeholder="District"
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          ></input>
        </div>
        <div className="flex items-center w-full my-2">
          <label htmlFor="province" className="w-auto block text-gray-700 pr-4">
            Province:
          </label>
          <input
            type="text"
            required
            id="province"
            name="province"
            placeholder="Province"
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          ></input>
        </div>
        <div className="flex items-center w-full my-2">
          <label htmlFor="postcode" className="w-auto block text-gray-700 pr-4">
            Postalcode:
          </label>
          <input
            type="text"
            required
            id="postcode"
            name="postcode"
            placeholder="Postalcode"
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          ></input>
        </div>
        <div className="flex items-center w-full my-2">
          <label htmlFor="tel" className="w-auto block text-gray-700 pr-4">
            Tel:
          </label>
          <input
            type="text"
            required
            id="tel"
            name="tel"
            placeholder="Telephone Number"
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          ></input>
        </div>
        <div className="flex items-center w-full my-2">
          <label htmlFor="pic" className="w-auto block text-gray-700 pr-4">
            Picture:
          </label>
          <input
            type="text"
            required
            id="pic"
            name="pic"
            placeholder="URL"
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
          ></input>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      >
        Add New Car
      </button>
    </form>
  );
}
