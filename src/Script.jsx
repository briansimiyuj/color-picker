import Box from './Box'
import Input from './Input'
import { useState } from 'react'

function Script() {

  const [backgroundColor, setBackgroundColor] = useState('')

  const [hexValue, setHexValue] = useState('')

  const [isDarkText, setIsDarkText] = useState(true)


  return (
    
    <div className="script">

        <Box 
          backgroundColor={backgroundColor}
          hexValue={hexValue}
          isDarkText={isDarkText}
        />

        <Input
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />

    </div>

  );
}

export default Script