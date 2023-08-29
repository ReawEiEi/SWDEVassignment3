import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import InformatinCard from '@/components/InformationCard'

export default function Home() {
  return (
    <main className='bg-white'>
      <Banner />
      <div className='m-2.5 mt-6 flex flex-row flex-wrap justify-around content-around'>
        <InformatinCard hospitalName='Chulalongkorn Hospital' imgHospital='/img/chula.jpg' />
        <InformatinCard hospitalName='Rajavithi Hospital' imgHospital='/img/rajavithi.jpg' />
        <InformatinCard hospitalName='Thammasat University Hospital' imgHospital='/img/thammasat.jpg' />
      </div>
    </main>
  )
}

