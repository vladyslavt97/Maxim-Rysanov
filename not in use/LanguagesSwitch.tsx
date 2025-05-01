import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useStore } from "../components/State";

type Props = {}
interface languagesState {
  setLanguage: (language: string) => void;
}

export default function LanguagesSwitch({}: Props) {
  const setLanguage = useStore((state: languagesState) => state.setLanguage);

  const engBio = () => {
    setLanguage('eng');
  }
 
  const ukrBio = () => {
    setLanguage('ukr')
  }
 
  const rusBio = () => {
    setLanguage('rus')
  }
 

  return (
    <div className='md:flex md:justify-end md:items-end md:w-full scale-75 md:scale-100'>
      <Box>
       <ButtonGroup size="large" aria-label="large button group">
        <Button onClick={engBio} key="one">Eng</Button>
        <Button onClick={ukrBio} key="two">Ukr</Button>
        <Button onClick={rusBio} key="three">Rus</Button>
      </ButtonGroup>
      </Box>
    </div>
  )
}