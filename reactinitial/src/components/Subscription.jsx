import { useState } from "react"
import LoadingMask from "./LoadingMask"

/* const Subscription= () => {

    const[email, setEmail] = useState("")
    const[isPending, setIsPending] = useState(false)
    const[form, setForm] = useState(true)
    const[load, setLoad] = useState(false)
    const[disappear, setDisappear] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault() //emiatt ha a submutra kattintounk, nem töldőik be az oldal egyből
        
        const data={email}

        fetch('https://demoapi.com/api/series/newsletter', {  //ez a post method pattern
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            console.log("new blog added")
            setForm(false)
            setTimeout(() => {
                setLoad(true)
              })
            setTimeout(() => {
                setLoad(false)
              }, 3000)
            setTimeout(() => {
                setIsPending(true)
              }, 3000)
            setTimeout(() => {
                setDisappear(false)
              }, 5000)
        }) 
    }


    return(
        <div>
            {disappear && <div>
                <h1>Subscribe to our newsletter</h1>
                {form && <form onSubmit={handleSubmit}>
                <input 
                        type="text"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                <button>Subscribe</button>
                </form>}
                {load && <div>Loading...</div>}
                {isPending && <div>Subscribed</div>}
            </div>}
        </div>
    )
}
 */
/* export default Subscription */


/* import React from 'react'

function Subscription() {

    return (
        <div>
            <form action="https://demoapi.com/api/series/newsletter" method='POST'>
                <h2>Subscribe to our newsletter</h2>
                <label>
                    Enter your email:
                    <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Subscription */

//ORAI MUNKAN HETFON

const Subscription= () => {

    const [mail, setMail] = useState("")
    const [valid, setValid] = useState(false)
    const [loader, setLoader] = useState(false)
    const [done, setDone] = useState(false)
    const [hide, setHide] = useState(false)


    //form nelkul

    const handleInputChange = (event) => {

        setMail(event.target.value)
        mail.includes("@") && mail.includes(".") ? setValid(true) : setValid(false)        
    };

    //form-ba

    const postSubscribeData =  () => {
        fetch('https://demoapi.com/api/series/newsletter', {
            method: "POST",
            body: JSON.stringify({
                "email": mail
            })
        }).then(res => {
            setLoader(false);
            setDone(true);
            setTimeout(() => {
                setHide(true)
                 }, 5000);
              })
            }

    const handleClickSubscribe = (event) => {
            event.preventDefault();
            setLoader(true);
            postSubscribeData()
            
    }


    return (
        <>
        {
            hide ? null : 
            loader && !done ? <LoadingMask /> : done ? <h2>Subscribed!</h2> :
            <form>
                <h2>Subscribe</h2>
                <input type="text" value={mail} onChange={(event) => { handleInputChange(event) }} ></input>
                {valid ? <button onClick={(event) => {handleClickSubscribe(event)}}>Send</button> : <button type="submit" disabled>Send</button>}
            </form>
        }
        </>
           )
    }

 
    export default Subscription


