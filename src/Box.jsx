const Box = ({ colorValue }) =>{

    return(

        <div className="box" style={{backgroundColor: colorValue}}>

            <p>{colorValue ? colorValue : 'Empty Value'}</p>

        </div>

    )

}


Box.defaultProps ={

    colorValue: 'empty color value',

}


export default Box