import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const style = {
        gap:props.gap ? ``
    }
    return (
        <div>
            
        </div>
    )
}

Grid.propTypes = {
    col:PropTypes.number.isRequired,
    mdCol:PropTypes.number,
    smcol:PropTypes.number,
    gap:PropTypes.number
}

export default Grid
