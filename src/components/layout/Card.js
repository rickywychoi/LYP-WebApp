import React from 'react'

function Card({image, body, title, link}) {
    return (
        <div className="card h-100">
        <div className="p-3">
            <img className="card-img-top" src={image} alt="Card image cap"/>
        </div>
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <a href={link} className="btn btn-link mt-auto">Website</a>
        </div>
        </div>
    )
}

export default Card;