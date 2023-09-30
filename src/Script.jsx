import Box from './Box'
import Input from './Input'
import { useState } from 'react'

function Script() {

  const [backgroundColor, setBackgroundColor] = useState('')

  return (
    
    <div className="script">

        <Box/>

        <Input
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />

    </div>

  );
}

export default Script