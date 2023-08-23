import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import InformatinCard from '@/components/InformationCard'

export default function Home() {
  return (
    <main style={{ backgroundColor: "#252525" }}>
      <Banner />
      <InformatinCard />
    </main>
  )
}
