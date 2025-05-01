import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Maxim Rysanov</title>
        <meta
          name="description"
          content="Grammy nominated Ukrainian-British violist and conductor Maxim Rysanov has established himself as one of the worldʼs most vibrant and charismatic musicians. As a violist, he is principally known as a frequent guest of the crème of the international music scene, such as BBC Last Night of the Proms and the festivals of Edinburgh, Salzburg and Verbier."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main grid wrapper */}
      <div className="grid grid-rows-[72px_1fr_51px] h-screen ">
        {/* Fixed header */}
        <div className="z-50">
          <Header />
        </div>

        {/* Scrollable main content, with padding to account for fixed header/footer */}
        <main className="overflow-auto bg-gray-200 border-8 border-gray-300">
          {children}
        </main>

        {/* Fixed footer */}
        <div className="z-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
