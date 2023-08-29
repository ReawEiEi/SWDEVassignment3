import styles from './card.module.css'
import Image from 'next/image'

export default function ProductCard({ hospitalName, imgHospital }: { hospitalName: string, imgHospital: string }) {
    return (
        <div className='w-3/12 h-[300px] rounded-lg shadow-lg bg-slate-400 drop-shadow-lg'>
            <div className='w-full h-[70%] relative rounded-t-lg '>
                <Image src={imgHospital}
                    alt={'Hospital Picture'}
                    fill={true}
                    className='object-cover rounded-t-lg' />
            </div>
            <div className='w-full h-[30%] p-[10px] text-black font-serif'>
                {hospitalName}
            </div>
        </div>
    );
}