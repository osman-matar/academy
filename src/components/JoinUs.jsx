import React from 'react'

const JoinUs = () => {
    return (
        <section id="join-us">
            <div className="content">
                <p className="text-primary">Practice Advice</p>
                <h1>JOIN US</h1>
                <p>
                    Have questions or need assistance? Reach out to us through our team we are here to help and ensure you have the best experience possible!
                </p>
                <form>
                    <input type='email' name='email' placeholder='Your Email' />
                    <button type='submit'> Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default JoinUs
