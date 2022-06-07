import React, { useState } from 'react'

const Tour = ({ tour, removeTour }) => {
    const [readMore, setReadMore] = useState(false)



    return (
        <article>
            <img src={tour.imageUrl} alt={tour.title} />
            <footer>
                <div className='tourInfo'>
                    <h2>{tour.name} Turu</h2>
                    <h4 className='tourPrice'>${tour.price}</h4>
                </div>
                <p>{readMore ? tour.desctiption :
                    `${tour.desctiption.substring(0, 200)}...`
                }
                    <button onClick={() => setReadMore(!readMore)} >{readMore ? 'show less' : 'read more'}</button>
                </p>
                <button className='deleteBtn' onClick={() => removeTour(tour.id)}>not interested</button>
            </footer>
        </article>
    )
}

export default Tour