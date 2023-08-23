import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/banner.png'}
                alt={'cover'}
                fill={true}
                priority
                objectFit='cover' />
            <div className={styles.bannerText}>
                <h2 className={styles.headText}>Have you received vaccination for COVID-19?</h2>
                <h1 className={styles.describeText}>Protect Your Health, Save Your Life @My Hospital</h1>
            </div>
        </div>

    );
}