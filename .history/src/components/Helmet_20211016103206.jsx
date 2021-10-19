import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {

    document.title = ' '
    return (
        <div>
            
        </div>
    )
}

Helmet.propTypes = {
    title:PropTypes.string.isRequired
}

export default Helmet
