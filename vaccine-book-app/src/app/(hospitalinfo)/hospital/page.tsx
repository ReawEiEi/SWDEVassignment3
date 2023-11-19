import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import AddHospitalForm from "@/components/AddHospitalForm";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Hostital() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions);
  const isLoggedIn = session && session.user && session.user.token;

  // Initialize profile to null
  let profile = null;

  // If user is logged in, fetch user profile
  if (isLoggedIn) {
    profile = await getUserProfile(session.user.token);
  }

  return (
    <main className="text-center p-5">
      <h1 className="text-2xl text-black text-semibold">Lists of Hospitals</h1>
      <Suspense
        fallback={
          <p className="text-black">
            Loading . . .<LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
        {isLoggedIn && profile && profile.data.role === "admin" ? (
          <AddHospitalForm />
        ) : null}
      </Suspense>
    </main>
  );
}
