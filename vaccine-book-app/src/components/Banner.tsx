'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner() {

    const banners = ['/img/banner.png', '/img/banner2.avif', '/img/banner3.avif', '/img/banner4.avif']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data: session } = useSession()
    return (
        <div className={styles.banner} onClick={() => setIndex(index + 1)}>
            <Image src={banners[index % 4]}
                alt={'cover'}
                fill={true}
                priority
                objectFit='cover' />
            <div className={styles.bannerText}>
                <h2 className={styles.headText}>Have you received vaccination for COVID-19?</h2>
                <h1 className={styles.describeText}>Protect Your Health, Save Your Life</h1>
            </div>
            {
                session ? <div className='z-30 absolute top-5 right-10 font-semibold text-xl text-cyan-800'>
                    Hello, {session.user?.name}
                </div> : null
            }
            <button className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
                onClick={(e) => { e.stopPropagation(); router.push('/hospital') }}>
                Rate Hospital
            </button>
        </div>

    );
}