import styles from './card.module.css'
import Image from 'next/image'

export default function ProductCard() {
    return (
        <div className={styles.card}>

            <div className={styles.cardimg}>
                <Image src={'/img/vaccine.avif'}
                    alt={'Information'}
                    fill={true}
                    objectFit='cover' />
            </div>
            <div className={styles.cardText}>
                <p>The COVID-19 vaccination has been confirmed to provide effective immunity against COVID-19. This must be done in conjunction with wearing a mask, keeping a distance, and washing your hands often. and avoid crowded areas Therefore, before vaccinating COVID-19, you should know and understand the information correctly.
                </p>
                <br />
                <p>
                    Vaccine against COVID-19 It will help stimulate the body to build immunity against this virus. Helps prevent infection if infected in the future But it takes some time after vaccination for the body to build up immunity.
                </p>
            </div>
        </div>
    );
}