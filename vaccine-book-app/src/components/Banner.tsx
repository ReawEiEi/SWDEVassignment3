'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {

    const banners = ['/img/banner.png', '/img/banner2.avif', '/img/banner3.avif', '/img/banner4.avif']
    const [index, setIndex] = useState(0)
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
        </div>

    );
}