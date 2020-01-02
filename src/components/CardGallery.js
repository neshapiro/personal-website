import React from 'react'
import Card from './Card'

const CardGallery = ({ cards, title, paragraph }) => {
    return (
        <div className={"CardGallery " + (paragraph ? "CardGallery--contained" : "")}>
            {title && <h2 className="CardGallery-title">{title}</h2>}
            <div className="CardGallery-cardContainer">
                {cards.map(card => <Card heading={card.heading} paragraph={card.paragraph} image={card.image} url={card.url} />)}
            </div>
            {paragraph && <div className="CardGallery-paragraph">{paragraph}</div>}
        </div>
    )
}

export default CardGallery