import React from 'react'

const Card = ({ heading, paragraph, image, url }) => {
    return (
        <CardContainer url={url} style={{ backgroundImage: "url(" + image + ")" }}>
            <div className="Card-overlay">
                <h3 className="Card-heading">{heading}</h3>
                <p className="Card-paragraph">{paragraph}</p>
            </div>
        </CardContainer>
    )
}

const CardContainer = ({ children, url, style }) => (
    url ?
        <a href={url} target="_blank" className="Card" style={style}>{children}</a> :
        <div className="Card" style={style}>{children}</div>
)

export default Card