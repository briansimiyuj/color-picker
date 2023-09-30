const Input = () =>{

    return(
 
        <form onSubmit={e => e.preventDefault()}>

          <label htmlFor="Color name">Add Color Name:</label>

          <input
            autoFocus
            required
            type="text" 
            name="" 
            id="" 
            placeholder="Enter a color here..."
            value={backgroundColor} 
            onChange={e => setBackgroundColor(e.target.value)}
          />

          <button>Change color</button>

        </form>

    )

}

export default Input