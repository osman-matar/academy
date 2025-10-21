import React from 'react'

const Card = ({id , title , description , color , bgColor , img }) => {
return (
    <div className='card'>
        <span style={{ color: color, backgroundColor: bgColor }} >{img}</span>
        <h2>{title}</h2>
        <div className="underline"></div>
            <p>{description}</p>
    </div>
)
}

export default Card


                        // return (
                        // <div key={id}> 
                        //         <h1>{title}</h1>
                        //         <span style={{ color: color, backgroundColor: bgColor, padding: "20px", borderRadius :"8px", fontSize:"30px", fontWeight:"900"}}>{ img }</span>
                        //     </div>
                        
