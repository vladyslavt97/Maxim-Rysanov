import Footer from '@/components/Footer';
import PastConcerts from '@/components/PastConcerts';
import concerts2021 from '@/concerts2021.json'
type Props = {}
interface ConcertType {
  year: number | string;
  date: string;
  viola: string;
  conductor: string;
  location: string;
  programme: string[];
}
export default function Concerts2022({}: Props) {
    const validConcerts2021 = concerts2021.sort((a: any, b: any) => {
      const [dayA, dateA] = a.date.split(' ')
      const [ddA, mmA] = dateA.split('/')
      const yyyyA = new Date().getFullYear()
      const fullDateStringA:any = `${yyyyA}-${mmA}-${ddA}`
      const dateObjectA = new Date(fullDateStringA)

      const [dayB, dateB] = b.date.split(' ')
      const [ddB, mmB] = dateB.split('/')
      const yyyyB = new Date().getFullYear()
      const fullDateStringB = `${yyyyB}-${mmB}-${ddB}`
      const dateObjectB = new Date(fullDateStringB)

      return dateObjectA.getTime() - dateObjectB.getTime()
    })
  return (
    <div className='bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black min-h-full flex flex-col items-center'>
        <PastConcerts/>
        <div className='flex justify-center items-center pt-5'>
          <h1 className='font-bold text-xl'>2021</h1>
        </div>
        <div className="flex flex-col mx-3 mt-4 justify-center items-start mb-40 lg:text-xl">
            {validConcerts2021.map((concert: ConcertType, index: number) => (
                <div key={index} className="m-3">
                <div className='flex flex-row'>
                        <h2 className='font-semibold'>{concert.date}</h2>&nbsp;{concert.viola !== "" && <h2>{concert.viola}</h2>}&nbsp;{concert.conductor !== "" && <h2>{concert.conductor}</h2>}
                    </div>
                <h5>{concert.location}<br/>
                {concert.programme.map((prog, ind)=>(
                    <div key={ind}>
                    <p>♪ {prog}</p>
                    </div>
                ))}
                </h5>
                </div>
            ))}
          </div>
          <Footer />
    </div>
  )
}