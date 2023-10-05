import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import InformatinCard from '@/components/InformationCard'
import CardPanel from '@/components/CardPanel'
import PromoteCard from '@/components/PromoteCard'

export default function Home() {
  return (
    <main className='bg-white'>
      <Banner />
      <PromoteCard></PromoteCard>
    </main>
  )
}

