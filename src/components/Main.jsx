import React from 'react'
import Home from "../components/Home"
import Courses from './Courses'
import Reviews from './Reviews'
import JoinUs from './JoinUs'
import Footer from './Footer'

const Main = () => {
    return (
        <main>
            <Home /> 
            <Courses />
            <Reviews />
            <JoinUs />
            <Footer />
        </main>
    )
}

export default Main
