import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {

    const inputRef = useRef(null)
    const onChange = () => props.onChange(inputRef.current)

    return (
        <label className="custom-checkbox">
            <input type="checkbox" ref={inputRef} onChange={} />
        </label>
    )
}

Checkbox.propTypes = {
    label:PropTypes.string.isRequired,
    checked:PropTypes.bool
}

export default Checkbox
