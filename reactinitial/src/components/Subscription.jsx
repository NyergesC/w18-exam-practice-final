import { useState } from "react"

const Subscription= () => {

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

export default Subscription


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