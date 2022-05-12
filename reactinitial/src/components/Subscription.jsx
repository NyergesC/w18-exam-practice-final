import React from 'react'


function Subscription() {
 

 
  return (
    <div>
        <form>
            <h2>Subscribe to our newsletter</h2>
            <input type='email' name="email"/>
            <input type='submit' name="submit" value='submit' pattern=".+@globex\.com" size="30" required/>

        </form>
        <></>
    </div>
  )
}

export default Subscription