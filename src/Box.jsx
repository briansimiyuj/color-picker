const Box = ({ backgroundColor }) =>{

    return(

        <div className="box" style={{backgroundColor: backgroundColor}}>

            <p>{backgroundColor ? backgroundColor : 'Empty Value'}</p>

        </div>

    )

}

export default Box