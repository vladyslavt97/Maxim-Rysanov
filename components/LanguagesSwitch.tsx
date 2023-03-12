import React from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
type Props = {}


export default function LanguagesSwitch({}: Props) {
 

  return (
    <div className='md:flex md:justify-end md:items-end md:w-full scale-75 md:scale-100'>
      <Box>
       <ButtonGroup size="large" aria-label="large button group">
        <Button key="one">Eng</Button>
        <Button key="two">Ukr</Button>
        <Button key="three">Rus</Button>
      </ButtonGroup>
      </Box>
    </div>
  )
}