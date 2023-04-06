import concerts2022 from '@/concerts2022.json'
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
    const validConcerts2022 = concerts2022.sort((a: any, b: any) => {
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
    <div>
        {validConcerts2022.map((concert: ConcertType, index: number) => (
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
  )
}