import React from 'react'
const Card = (props) =>{
    return(
        <div className="card">
            <div className='image'>
                <img src={props.img} alt="NetFlixImage" />
            </div>
            <div className='tag'>
                <p>{props.tag}</p>
            </div>
            <div className='title'>
            <p>{props.titles}</p>
            </div>
            <div className='btn'>
                <a href="/"><button type="submit">Watch Now</button></a>
            </div>
        </div>
    )
}
export default Card;