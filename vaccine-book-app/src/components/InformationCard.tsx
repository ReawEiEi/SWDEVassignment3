'use client'
import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating, Typography } from '@mui/material';
import { useState } from 'react';

export default function InformatinCard({ hospitalName, imgHospital, onRating }: { hospitalName: string, imgHospital: string, onRating: Function }) {
    const [value, setValue] = useState<number | null>(2);
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
                        onRating(newValue, hospitalName);
                    }}
                />
            </div>
        </InteractiveCard>
    );
}