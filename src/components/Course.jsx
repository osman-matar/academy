import React from 'react'
import { IoMdAlarm } from 'react-icons/io'
import { FaBookOpen, FaChevronRight, FaStar } from 'react-icons/fa6'

const Course = ({img, title, department, rating, description, sales, price , discount, duration, lessons}) => {
    return (
        <div className='course'>
            <span className="sale">Sale</span>
            <img
                src={img}
                alt={title}
                width={600}
                height={400}
            />
            <div className="content">
                <div className="course-field">
                    <p className="department">{department}</p>
                    <p className="rating">
                        <FaStar/>{rating}
                    </p>
                </div>
                <h3>{title}</h3>
                <p className='description'>{description}</p>
                <p className='sales'>{sales} Sales</p>
                <p className='price'>
                    <del>{price}</del>
                    <span className="text-secoundary">{ discount}</span>
                </p>
                <div className="course-info">
                    <p> <IoMdAlarm/> {duration}</p>
                    <p><FaBookOpen/> {lessons }</p>
                </div>
                <a href="#" className='btn-learn'> Learn More <FaChevronRight/></a>
            </div>
        </div>
    )
}

export default Course
