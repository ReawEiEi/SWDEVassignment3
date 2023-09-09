import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function ProductCard({ hospitalName, imgHospital }: { hospitalName: string, imgHospital: string }) {
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg '>
                <Image src={imgHospital}
                    alt={'Hospital Picture'}
                    fill={true}
                    className='object-cover rounded-t-lg' />
            </div>
            <div className='w-full h-[30%] p-[10px] text-black font-serif'>
                {hospitalName}
            </div>
        </InteractiveCard>
    );
}