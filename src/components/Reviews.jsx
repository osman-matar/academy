import React from 'react'
import SectionHeader from "./SectionHeader"
import Review from './Review'
import { ratingData } from '../../data'

const Reviews = () => {
    return (
    <section id="reviews">
        <div className='container'>
            <SectionHeader
                title="Each and every client is important"
                description="Discover wwhat our student are saying in the Reviews sectional Real feedback from learners who have experienced and benifited from our courses. "
                />
                <div className="reviews-container">
                    {
                        ratingData.map((item) => {
                            const {id, stars, img, description, person, job } = item
                            return (
                                <Review
                                key={id}
                                id={id}
                                stars={stars}
                                img={img}
                                description={description}
                                name={person}
                                job={job}
                                />
                            )
                        })
                    }
                </div>
        </div>
    </section>
    )
}

export default Reviews
