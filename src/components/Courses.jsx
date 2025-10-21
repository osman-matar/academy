import React from 'react'
import SectionHeader from './SectionHeader'
import { coursesData } from '../../data'
import Course from './Course'

const Courses = () => {
    
    return (
        <section id="courses">
            <div className="container">
                <SectionHeader
                    title="make Online education acessible"
                    description="Education is the most powerful tool to unlock potential,
                        ignite curiosity, and shape a brighter future. At our platform, we 
                        belive in making learning accessible, engaging, and transformative,
                        empowering students to achieve their dreams and build the skills they
                        need for success in an ever-changing world."
                />
                <div className="courses-container">
                    {coursesData.map(course => {
                        const {department, description , discount, duration, id, img, lessons, price, rating, sales, title} = course 
                        return <Course
                            key={id}
                            department={department}
                            description={description}
                            discount={discount}
                            duration={duration}
                            img={img}
                            lessons={lessons}
                            price={price}
                            rating={rating}
                            sales={sales}
                            title={title}
                        />
                    }) }
                </div>
            </div>
        </section>
    )
}

export default Courses
