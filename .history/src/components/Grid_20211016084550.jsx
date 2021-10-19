import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const style = {
        gap:props.gap ? `${props.gap}px`:'0'
    }
    const col = props.col ? `grid-col-${props.col}`:''
    const mdCol = props.mdCol ? `grid-col-${props.col}` :''
    const msCol = props.smcol ? `grid-col-${props.col}` :''
    return (
        <div className={`gird ${col} ${mdCol} ${smCol} `}>
            
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
