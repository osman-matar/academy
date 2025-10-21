import React from 'react'
import { cardData } from '../../data'
import Card from './Card'

const Home = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="home-header">
                    <span>Join Us</span>
                    <h1>Best Learning Opportunites</h1>
                    <p>
                        We know how large object will act, but things on a small scale just do not act that way.
                    </p>
                    <a href="#" className='btn btn-red'>Get Quote Now</a>
                    <a href="#" className='btn btn-transparent'> Learn More</a>
                </div>
                <div className="card-container">
                    {cardData.map(card => {
                        const { title, id, img, description, color, bgColor } = card;
                        return <Card key={id}
                            img={img}
                            id={id}
                            title={title}
                            description={description}
                            color={color}
                            bgColor={bgColor}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home