import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({id,title,url}) => {
    return (
        <div className='Card'>
            <img src={url} ></img>
            <div className="Footer">{title}</div>
        </div>
    )
}
GifGridItem.propTypes = {
    title : PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}
