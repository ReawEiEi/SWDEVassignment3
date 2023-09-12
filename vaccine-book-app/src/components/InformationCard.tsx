'use client'
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function InformatinCard({ hospitalName, imgHospital, onRating, ratingMap }: { hospitalName: string, imgHospital: string, onRating: Function, ratingMap: Map<string, number | null>; }) {
    const [value, setValue] = useState<number | null>(null);

    const hospitalRating = ratingMap.get(hospitalName);

    useEffect(() => {
        const hospitalRating = ratingMap.get(hospitalName);
        setValue(hospitalRating || null);
    }, [ratingMap, hospitalName]);

    const handleRatingChange = (newValue: number | null) => {
        setValue(newValue || null);
        onRating(newValue, hospitalName);
    };

    return (
        <InteractiveCard>
            <div className='w-full h-[65%] relative rounded-t-lg '>
                <Image src={imgHospital}
                    alt={'Hospital Picture'}
                    fill={true}
                    className='object-cover rounded-t-lg' />
            </div>
            <div className='w-full h-[10%] p-[10px] text-black font-serif'>
                {hospitalName}
            </div>
            <div className='h-[10%] p-[10px] my-1'>
                <Typography component="legend" className='text-black text-sm font-serif'>Rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        handleRatingChange(newValue);
                    }}
                />
            </div>
        </InteractiveCard>
    );
}