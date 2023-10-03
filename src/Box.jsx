const Box = ({ backgroundColor, hexValue }) =>{

    return(

        <div className="box" style={{backgroundColor: backgroundColor}}>

            <p>{backgroundColor ? backgroundColor : 'Empty Value'}</p>

            <p>{hexValue ? hexValue : null}</p>

        </div>

    )

}

export default Box