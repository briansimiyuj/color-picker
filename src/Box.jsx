const Box = ({ backgroundColor, hexValue, isDarkText }) =>{

    return(

        <div className="box"
            style={{
                backgroundColor: backgroundColor,
                color: isDarkText ? "#000" : "#fff"
            }}>

            <p>{backgroundColor ? backgroundColor : 'Empty Value'}</p>

            <p>{hexValue ? hexValue : null}</p>

        </div>

    )

}

export default Box