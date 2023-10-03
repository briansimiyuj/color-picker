import Box from './Box'
import Input from './Input'
import { useState } from 'react'

function Script() {

  const [backgroundColor, setBackgroundColor] = useState('')

  const [hexValue, setHexValue] = useState('')


  return (
    
    <div className="script">

        <Box 
          backgroundColor={backgroundColor}
          hexValue={hexValue}
        />

        <Input
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          setHexValue={setHexValue}
        />

    </div>

  );
}

export default Script