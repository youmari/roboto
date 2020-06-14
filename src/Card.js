import React from 'react';



const Card = ({name , email, id }) => {
    return(
        
        <div className=' dib pa4 ma2 br4 shadow-5 tc bg-blue grow'>
            <img src={`https:\\robohash.org/${id}?size=200x200`} alt='robot' />
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )



}

export default Card;