import Head from 'next/head';
import Banner from '../components/Bannner/index';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ smallCards = [], mediumCards = [] }) {
  return (
    <div className=''>
      <Head>
        <title>My Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {smallCards.map((item) => (
              <SmallCard key={item.img} {...item} />
            ))}
          </div>
        </section>
        <section className=''>
          <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>
          <div className='p-3 -ml-3 flex space-x-3 overflow-x-scroll overflow-y-hidden h-full scrollbar-hide'>
            {mediumCards.map((item) => (
              <MediumCard key={item.img} {...item} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img='https://links.papareact.com/4cj'
            buttonText='Get Inspired'
            title='The greatest outdoors.'
            description='Wishlists curated  by Airbnb. '
          />
        </section>
      </main>
      <Footer className='' />
    </div>
  );
}

export async function getStaticProps() {
  const smallCards = await fetch('https://links.papareact.com/pyp').then(
    (data) => data.json()
  );
  const mediumCards = await fetch('https://links.papareact.com/zp1').then(
    (data) => data.json()
  );
  return { props: { smallCards, mediumCards } };
}
