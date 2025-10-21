import React from 'react'


const  Review = ({id, img ,  description ,stars , name , job}) => {
    return (
        <div className="review ">
            <span className='stars'>{stars}</span>
            <p className="description">{description}</p>
            <div className="info">
                <div className="img-holder" >
                    <img
                        src={img}
                        fetchPriority='true'
                        alt="developer" />
                </div>
                <div className="data">
                    <h3>{name}</h3>
                    <small>{ job}</small>
                    {/* <p>{job}</p> */}
                </div>
            </div>
        </div>
    )
}

export default Review;

