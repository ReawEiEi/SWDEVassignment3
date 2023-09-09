'use client'
import { useReducer } from "react";
import InformatinCard from "./InformationCard";

export default function CardPanel() {
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

    return (
        <div>
            <div className="m-2.5 mt-6 flex flex-row flex-wrap justify-around content-around">
                <InformatinCard
                    hospitalName="Chulalongkorn Hospital"
                    imgHospital="/img/chula.jpg"
                    onRating={(rate: number | null, name: string) =>
                        dispatchRating({ rating: rate, hname: name })
                    }
                />
                <InformatinCard
                    hospitalName="Rajavithi Hospital"
                    imgHospital="/img/rajavithi.jpg"
                    onRating={(rate: number | null, name: string) =>
                        dispatchRating({ rating: rate, hname: name })
                    }
                />
                <InformatinCard
                    hospitalName="Thammasat University Hospital"
                    imgHospital="/img/thammasat.jpg"
                    onRating={(rate: number | null, name: string) =>
                        dispatchRating({ rating: rate, hname: name })
                    }
                />
            </div>
            <div className="w-full text-xl font-medium text-black ml-20">Rating List</div>
            {Array.from(ratingList).map(([name, rate]) => (
                <div key={name} className="text-black ml-20">
                    {name} : Rating is {rate}
                </div>
            ))}
        </div>
    );
}