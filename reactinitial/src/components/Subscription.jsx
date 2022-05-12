import React from 'react'

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

export default Subscription