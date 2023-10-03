'use client'
import { SyntheticEvent, useReducer, useState } from "react";
import InformatinCard from "./InformationCard";
import Link from "next/link";

export default function CardPanel() {
    const [rating, setRating] = useState(null);

    const ratingReducer = (ratingList: Map<string, number | null>, action: { rating: number | null; hname: string }) => {
        const newRatingList = new Map(ratingList);

        switch (action.rating) {
            case null: {
                newRatingList.delete(action.hname);
                return newRatingList;
            }
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: {
                newRatingList.set(action.hname, action.rating);
                return newRatingList;
            }
            default:
                return ratingList;
        }
    };
    const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string, number | null>());

    const mockHospitalRepo = [{ hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    { hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg" }]

    return (
        <div>
            <div className="m-2.5 mt-6 flex flex-row flex-wrap justify-around content-around">
                {
                    mockHospitalRepo.map((hospitalItem) => (
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-3/12">
                            <InformatinCard hospitalName={hospitalItem.name} imgHospital={hospitalItem.image}
                                onRating={(rate: number | null, name: string) => dispatchRating({ rating: rate, hname: name })}
                                ratingMap={ratingList} />
                        </Link>
                    ))
                }
            </div>
            <div className="w-full text-xl font-medium text-black">Rating List</div>
            {Array.from(ratingList).map(([name, rate]) => (
                <div key={name} className="text-black"
                    onClick={() =>
                        dispatchRating({ rating: null, hname: name })
                    }>
                    {name} : Rating is {rate} Stars.
                </div>
            ))}
        </div>
    );
}