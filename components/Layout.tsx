import Head from 'next/head'
import Header from "./Header";
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div>
        <Head>
        <title>Maxim Rysanov</title>
        <meta name="description" content="Grammy nominated Ukrainian-British violist and conductor Maxim Rysanov has established himself as one of the worldʼs most vibrant and charismatic musicians. As a violist, he is principally known as a frequent guest of the crème of the international music scene, such as BBC Last Night of the Proms and the festivals of Edinburgh, Salzburg and Verbier." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}